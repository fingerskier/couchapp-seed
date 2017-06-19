var User = {
    list: []
    ,
    loadList(){
        return m.request({
            method: "GET",
            url: `${DB}/users`
        })
        .then(function(result) {
            User.list = result.them
        })
    }
    ,
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
}
