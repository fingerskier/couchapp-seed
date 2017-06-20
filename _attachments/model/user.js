var User = {
    createList(){
        m.request({
            method: "POST"
            ,
            url: `${DB}/users`
            ,
            data: {
                id: "users"
                ,
                them: [
                    { name: 'flarn' , role: 'guber' }
                    ,
                    { name: 'schluma' , role: 'admin' }
                ]
            }
        })
        .then(console.info)
        .catch(console.error)
    }
    ,
    current: {}
    ,
    list: []
    ,
    load(soughtID){
        return m.request({
            method: "GET",
            url: `${DB}/users`,
            withCredentials: true
        })
        .then(function(result) {
            User.list.filter((element,index)=>{
                if (element.id == soughtID) User.current = User.list[index]
            })
        })
    }
    ,
    loadList(){
        return m.request({
            method: "GET",
            url: `${DB}/users`,
            withCredentials: true
        })
        .then(function(result) {
            User.list = result.them
        })
    }
    ,
    save(){
console.log(User.current)
        return m.request({
            data: User.current,
            method: "PUT",
            url: `${DB}/users`,
            withCredentials: true
        })
    }
}
