export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host":     process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "udacitylab",
    "aws_media_bucket": "udagram-eme-dev"
  },
  
  "prod": {
    "username": "",
    "password": "",
    "database": "udagramemeke",
    "host": "",
    "dialect": "postgres"
  },
  "jwt":{
    "secret":"helloworld"
  }
}
