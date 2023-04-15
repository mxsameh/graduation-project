import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "$env/static/private"

/**
 * CREATE TOKEN FUNCTION
 *
 * INPUTS:
 * data : data to be included in token's payload
 * secret : the secret key to sign the token
 *
 * OUTPUTS:
 * token : the token of the data signed by the secret
 */
const createToken = (data: string | object): string => {
	const token = jwt.sign(data, TOKEN_SECRET);
	return token;
};

/**
 * VERIFY TOKEN FUNCTION
 *
 * INPUTS:
 * token : jwt token
 * secret : the secret key to sign the token
 *
 * OUTPUTS:
 * isValid : true / false based on the verification of the token
 */
const verifyToken = (token: string): boolean => {
	try {
		jwt.verify(token, TOKEN_SECRET);
		return true;
	} catch (err) {
		return false;
	}
};

/**
 * DECODE TOKEN FUNCTION
 *
 * INPUTS:
 * token : jwt token
 *
 * OUTPUTS:
 * payload : data included in token's payload
 */
const decodeToken = (token: string) => {
	const payload = jwt.decode(token);
	return payload;
};

export { createToken, verifyToken, decodeToken };

/**
 * TESTING EXAMPLES
 */

// const user = {
//   name : 'mohamed',
//   age : 23
// }

// const secret = 'oh no'
// const token = createToken(user, secret)
// console.log( token );

// const isValid = verifyToken(token, secret)
// console.log( isValid );

// const payload = decodeToken(token);
// console.log( payload );