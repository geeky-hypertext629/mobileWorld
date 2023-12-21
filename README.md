# Install Dependencies

**For Backend** - `npm i`

**For Frontend** - `cd frontend` ` npm i`

## Env Variables

Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

**Essential Variables**
PORT=
DB_URI =
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
JWT_SECRET=
JWT_EXPIRE=
COOKIE_EXPIRE=
SMPT_SERVICE =
SMPT_MAIL=
SMPT_PASSWORD=
SMPT_HOST=
SMPT_PORT=
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
_fill each filed with your info respectively_

**Now Add the following products manually into your database to view the mobiles**
{"_id":{"$oid":"65845ab24d069682b74e9a34"},"name":"Realme c67 5G","description":"5G Charging Champion","price":{"$numberInt":"13999"},"ratings":{"$numberInt":"0"},"images":[{"public_id":"products/xj4x9tnrhgduxahl5ej5","url":"https://res.cloudinary.com/dnvohy3se/image/upload/v1703172786/products/xj4x9tnrhgduxahl5ej5.webp","_id":{"$oid":"65845ab24d069682b74e9a35"}}],"category":"BudgetFriendly","processor":"Snapdragon 676","memory":"64GB","OS":"Android","Stock":{"$numberInt":"2"},"numOfReviews":{"$numberInt":"0"},"user":{"$oid":"6584591d4d069682b74e9a28"},"reviews":[],"createdAt":{"$date":{"$numberLong":"1703172786878"}},"__v":{"$numberInt":"0"}}
{"_id":{"$oid":"65845fdf4d069682b74e9a59"},"name":"POCO C65","description":"Large Display","price":{"$numberInt":"8499"},"ratings":{"$numberInt":"0"},"images":[{"public_id":"products/d8pzbdmy3fztl4zeot7v","url":"https://res.cloudinary.com/dnvohy3se/image/upload/v1703174110/products/d8pzbdmy3fztl4zeot7v.webp","_id":{"$oid":"65845fdf4d069682b74e9a5a"}}],"category":"BudgetFriendly","processor":"Snapdragon 600","memory":"128GB","OS":"Android","Stock":{"$numberInt":"2"},"numOfReviews":{"$numberInt":"0"},"user":{"$oid":"6584591d4d069682b74e9a28"},"reviews":[],"createdAt":{"$date":{"$numberLong":"1703174111663"}},"__v":{"$numberInt":"0"}}
{"_id":{"$oid":"658465624d069682b74e9ab0"},"name":"vivo T2x 5G","description":"Powerful Performance","price":{"$numberInt":"12999"},"ratings":{"$numberInt":"0"},"images":[{"public_id":"products/zygtjzobrwtepeexdjio","url":"https://res.cloudinary.com/dnvohy3se/image/upload/v1703175520/products/zygtjzobrwtepeexdjio.avif","_id":{"$oid":"658465624d069682b74e9ab1"}}],"category":"MidRange","processor":"Snapdragon 712","memory":"127GB","OS":"Andoid","Stock":{"$numberInt":"2"},"numOfReviews":{"$numberInt":"0"},"user":{"$oid":"6584591d4d069682b74e9a28"},"reviews":[],"createdAt":{"$date":{"$numberLong":"1703175522049"}},"__v":{"$numberInt":"0"}}
