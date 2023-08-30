let getId = (tab)=> tab.length == 0 ? 1 : tab[tab.length-1]._id + 1
module.exports = getId