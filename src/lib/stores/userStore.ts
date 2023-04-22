import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let user: any = null;

if(browser){
    if(localStorage.getItem('user'))
    {
        let storageUser = localStorage.getItem('user')
        user = JSON.parse(storageUser as string)
    }
    else{
        localStorage.setItem('user','null')
    }
}

const UserStore = writable(user);

UserStore.subscribe((data) => {
    let user = JSON.stringify(data)
    if(browser)  localStorage.setItem('user', user)
});

export default UserStore;
