UserList = {
    oninit: User.loadList
    ,
    view(){
        return m("ul#user-list", User.list.map(user=>{
            return m('li.user-item', m('a', {
                href: '/edit/' + user.id,
                oncreate: m.route.link
            }, `${user.firstName} ${user.lastName}`
        ))}))
    }
}
