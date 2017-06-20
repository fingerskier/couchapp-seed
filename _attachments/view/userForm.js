UserForm = {
    oninit(vnode){
        User.load(vnode.attrs.id)
console.log(vnode.attrs.id, User.list)
    }
    ,
    view(){
        return m("form", {
            onsubmit(event){
                event.preventDefault()
                User.save()
            }
        }, [
            m("label", 'First Name',
                m("input[type=text][placeholder=First Name]",{
                    oninput: m.withAttr("value", function(value) {User.current.firstName = value}),
                    value: User.current.firstName
                })
            )
            ,
            m("label", 'Last Name',
                m('input[type=text][placeholder=Last Name]',{
                    oninput: m.withAttr("value", function(value) {User.current.lastName = value}),
                    value: User.current.lastName
                })
            )
            ,
            m('button[type=submit]', 'Save')
        ])
    }
}
