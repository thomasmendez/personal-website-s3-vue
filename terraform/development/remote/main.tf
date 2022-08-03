provider "aws" {}

provider "aws" {
  alias = "virginia"

  version = "~> 2.0"
  region  = "us-east-1"
}