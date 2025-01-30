/* eslint-disable */

import config from "@/utils/config"
import CryptoJS from "crypto-js"

import useStorage from "./useStorage"

const { getItem } = useStorage()

export const encrypt = (value: any) =>
  CryptoJS.AES.encrypt(value, config.secret).toString()

export const decrypt = (storage: any) => {
  const bytes = CryptoJS.AES.decrypt(storage, config.secret)
  return bytes.toString(CryptoJS.enc.Utf8)
}

export const tokenValue = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account.token
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const userId = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account._id
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const userEmail = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account.email
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const userChecker = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account.personalInfo.firstName
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const companyChecker = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account.hasCompany
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const userInfo = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account.personalInfo
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const userImage = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account.personalInfo.image
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const ssoChecker = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account.ssoLogin
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const permissions = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account.role.permission
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const userAccount = async () => {
  const account = getItem("account")
  if (account) {
    const _account = JSON.parse(decrypt(account))
    if (_account) {
      return _account
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const counter = async () => {
  const account = getItem("counter")
  if (account) {
    const _account = account
    if (_account) {
      return _account
    } else {
      return ""
    }
  } else {
    return ""
  }
}

export const hasPermission = (permissions: string[], endpoint: string) => {
  return permissions.includes(endpoint)
}

/* eslint-enable */
