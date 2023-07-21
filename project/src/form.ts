interface User {
    name: string;
    surname: string;
    email: string;
    phone: string;
}

class UserList {
    private users: User[];

    constructor() {
        this.users = [{
            name: "Paolo",
            surname: "Rossi",
            email: "paolorossi@mail.com",
            phone: "3778887267"
        },
    
        {
            name: "Mario",
            surname: "Bianchi",
            email: "mariobianchi@mail.it",
            phone: "3669287626"
        }];
    }

    getUsers(): User[] {
        return this.users;
    }

    setUser(users: User) {
        this.users.push(users);
    }
    filter() {
        
        let searchUser = document.getElementById("search") as HTMLInputElement;
        let filter = searchUser.value.toUpperCase();
        let list = document.getElementById("users");
        let text;
        if (list != null) {
            let element = list.getElementsByTagName("li");
            for (let i = 0; i < element.length; i++) {
                text =  list.getElementsByTagName("li")[i].innerText;
                if (text.toUpperCase().indexOf(filter) > -1) {
                    element[i].style.display = "";
                    element[i].style.opacity = "";
                    
                } else {
                    element[i].style.opacity  = "0.5";                   
                }
            }
        }
    }
}

let users = new UserList();

function renderUsers(user: User[]): void {
        let userList = document.getElementById("users");
        if (userList != null) userList.innerHTML = "";
        for (let i = 0; i < user.length; i++) {
            let inject = document.createElement("li");
            inject.className = "list-group-item";
            inject.innerHTML = `
        <div class="row">
            <div class="col"> ${user[i].name}</div>
            <div class="col"> ${user[i].surname}</div>
            <div class="col"> ${user[i].email}</div>
            <div class="col"> ${user[i].phone}</div>
        </div>
        `
            if (userList != null) {
                userList.appendChild(inject)
            }
    
        }
    }


    function addUser(event: Event) {
        event.preventDefault();
        let nameByInput = document.getElementById("input_name") as HTMLInputElement;
        let surnameByInput = document.getElementById("input_surname") as HTMLInputElement;
        let emailByInput = document.getElementById("input_email") as HTMLInputElement;
        let phoneByInput = document.getElementById("input_phone") as HTMLInputElement;
    
        let newUser: User =
        {
            name: nameByInput.value,
            surname: surnameByInput.value,
            email: emailByInput.value,
            phone: phoneByInput.value
        };
    
        users.setUser(newUser);
        renderUsers(users.getUsers());
        let clearInput = document.getElementById("myForm") as HTMLFormElement;
       clearInput.reset();
    
    }
    renderUsers(users.getUsers());
    let formid = document.getElementById("myForm")
    if (formid != null) formid.addEventListener("submit", addUser)

    let search = document.getElementById("search");
    if(search!=null)
    search.addEventListener("input", users.filter);