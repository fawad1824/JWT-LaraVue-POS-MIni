import Token from "./Token"
import AppStorage from "./AppStorage"
import moment from 'moment'


class User {
    responseAfterLogin(res) {

        const access_token = res.data.authorisation.token;
        const user_name = res.data.authorisation.name;

        if (Token.isValid(access_token)) {
            AppStorage.store(access_token, user_name)
        }
    }

    hasToken() {
        const storeToken = localStorage.getItem('token');
        if (storeToken) {
            return Token.isValid(storeToken) ? true : false
        }
        return false;
    }

    loggedIn() {
        return this.hasToken()
    }

    name() {
        if (this.loggedIn()) {
            return localStorage.getItem('user')
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(localStorage.getItem('token'))
            return payload.sub

        }
        return false
    }

    // Toast
    ReposnseError($message, $error) {
        Toast.fire({
            icon: $error,
            title: $message
        })
    }

    // Noty Alert
    NotyAlertss(type, text) {
        new Noty({
            type: type,
            layout: "topRight",
            text: text,
            timeout: 1000,
        }).show();
    }

}


export default User = new User()
