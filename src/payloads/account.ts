export type accountMt43 = {
  account: {
    Login: number;
    Group: string;
    Password: string;
    Enable: boolean;
    EnableChangePassword: boolean;
    EnableReadOnly: boolean;
    Name: string;
    Country: string;
    City: string;
    State: string;
    Zipcode: string;
    Address: string;
    LeadSource: string;
    Phone: string;
    Email: string;
    IdentityNumber: string;
    Comment: string;
    SendReports: boolean;
    Leverage: number;
    AgentAccount: number;
    Status: string;
    UserColor: number;
    RegDate: string;
    LastDate: string;
    PasswordPhone: string;
    Credit: number;
    Balance: number;
    PasswordInvestor: string;
    EnableOTP: boolean;
  };
};
export type accountMt4 = {
  account: {
    Login: number;
    Group: string;
    Password: string;
    Enable: boolean;
    EnableChangePassword: boolean;
    EnableReadOnly: boolean;
    Name: string;
    Country: string;
    City: string;
    State: string;
    Zipcode: string;
    Address: string;
    LeadSource: string;
    Phone: string;
    Email: string;
    IdentityNumber: string;
    Comment: string;
    SendReports: boolean;
    Leverage: number;
    AgentAccount: number;
    Status: string;
    UserColor: number;
    RegDate: string;
    LastDate: string;
    PasswordPhone: string;
    Credit: number;
    Balance: number;
    PasswordInvestor: string;
    EnableOTP: boolean;
    
  };
};

export function createAccountPayload({
  login = 0,
  group = 'DefaultGroup',
  password = 'DefaultPassword',
  enable = false,
  enableChangePassword = false,
  enableReadOnly = false,
  name = "",
  country = "",
  city = "",
  state = "",
  zipcode = "",
  address = "",
  leadSource = "",
  phone = "",
  email = "",
  identityNumber = "",
  comment = "",
  sendReports = false,
  leverage = 100,
  agentAccount = 2342,
  status = "",
  userColor = 0,
  regDate = "1/1/2022",
  lastDate = "1/1/2022",
  passwordPhone = "",
  credit = 0,
  balance = 0,
  passwordInvestor = "",
  enableOTP = true
}: {
  login?: number;
  group?: string;
  password?: string;
  enable?: boolean;
  enableChangePassword?: boolean;
  enableReadOnly?: boolean;
  name?: string;
  country?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  address?: string;
  leadSource?: string;
  phone?: string;
  email?: string;
  identityNumber?: string;
  comment?: string;
  sendReports?: boolean;
  leverage?: number;
  agentAccount?: number;
  status?: string;
  userColor?: number;
  regDate?: string;
  lastDate?: string;
  passwordPhone?: string;
  credit?: number;
  balance?: number;
  passwordInvestor?: string;
  enableOTP?: boolean;
}): accountMt4 {
  const payload: accountMt4 = {
    account: {
      Login: login,
      Group: group,
      Password: password,
      Enable: enable,
      EnableChangePassword: enableChangePassword,
      EnableReadOnly: enableReadOnly,
      Name: name,
      Country: country,
      City: city,
      State: state,
      Zipcode: zipcode,
      Address: address,
      LeadSource: leadSource,
      Phone: phone,
      Email: email,
      IdentityNumber: identityNumber,
      Comment: comment,
      SendReports: sendReports,
      Leverage: leverage,
      AgentAccount: agentAccount,
      Status: status,
      UserColor: userColor,
      RegDate: regDate,
      LastDate: lastDate,
      PasswordPhone: passwordPhone,
      Credit: credit,
      Balance: balance,
      PasswordInvestor: passwordInvestor,
      EnableOTP: enableOTP,     
    },
  };
  return payload;
}

// Example usage:

