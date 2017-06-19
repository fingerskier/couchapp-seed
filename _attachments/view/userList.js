UserList = {
    oninit: User.loadList
    ,
    view(){
        return m("ul#user-list", User.list.map(user=>{
            return m('li.user-item', user.name)
        }))
    }
}
