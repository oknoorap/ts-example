enum EStatus {
  Active,
  Deactive,
  Pending
}

// Custom Enum Value
enum EStatus2 {
  Active = "active",
  Deactive = "deactive"
}

// String / number
enum EDownloadStatus {
  Downloaded = 100,
  Failed = 99
}

// Old way
const StatusTypes = {
  ACTIVE: "active",
  DEACTIVE: "deactive",
  PENDING: "pending"
};

const variable = "active";

// ancient, old, and new
if (variable === "active") {
}

if (variable === StatusTypes.ACTIVE) {
}

if (variable === EStatus2.Active) {
}
