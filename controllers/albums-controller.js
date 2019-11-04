const AlbumsService = require("../services/albums-services");

module.exports = {
    addNewAlbum(req, res) {
        const {artistName, title, image, recordLabel } = req.body;

        AlbumsService.add(artistName, title, image, recordLabel => {
            res.json({respone});
        });
    },
    getAllAlbums(req, res) {
        AlbumsService.findAll(Albums => {
            res.json(Albums);
        });
    },
    
  removeOneAlbum(req, res){
    const id = req.body
    AlbumsService.removeAlbum(id, response => {
      res.json({ response });
    })
  },

  updateOneAlbum(req, res){
    const {_id, title} = req.body;
    AlbumsService.updateAlbum(_id, title, response => {
    res.json({ response });
    })
  }
};