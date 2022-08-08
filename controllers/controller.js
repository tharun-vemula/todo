const Post = require('../model/model')

exports.addItem = (req, res) => {
    const title = req.params.item;
    
    const post = new Post({
        title: title
    })

    post.save()
        .then(resp => console.log(resp))
        .catch(err => console.log(err._message))
}

exports.deleteItem = (req, res) => {
    const title = req.params.item
    
    Post.deleteOne({title : title})
        .then(resp => console.log(resp))
        .catch(err => console.log(err))

}

exports.getHome = (req, res) => {
    Post.find()
        .then(posts => {
            res.render('index', {posts : posts})
        })
}