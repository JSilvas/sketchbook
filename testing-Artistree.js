// var allArtists = [
//   { id: '000001',
//     name: 'Jain',
//     image: 'https://i.scdn.co/image/6e4d8ba95cb31c0475179d55c2af4760136d304f',
//     children: [
//       {
//         id: '000002',
//         name: 'Lady Gaga',
//         image: 'https://i.scdn.co/image/5210a7fa24a58b3bc8109082fa7292afe437458f',
//         children: [
//           {
//             id: '3881838',
//             name: 'Gwen Stefani',
//             image: 'https://i.scdn.co/image/82a1aaedb700c8e13ae91e54c2c3329e1839c7ca',
//             children: []
//           },
//           {
//             id: '3881838',
//             name: 'Gwen Stefani',
//             image: 'https://i.scdn.co/image/82a1aaedb700c8e13ae91e54c2c3329e1839c7ca',
//             children: []
//           }
//         ]
//       },
//       {
//         id: '000003',
//         name: 'Katy Perry',
//         image: 'https://i.scdn.co/image/fcdc433e8ccf8d46d58ac70db322feb9b3328731',
//         children: []
//       }
//     ]
//   }
// ];

function Artist(id, name, image, parent_id) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.parent_id = parent_id;
}
Artist.all = [{
  id: '3881838',
  name: 'Gwen Stefani',
  image: 'https://i.scdn.co/image/82a1aaedb700c8e13ae91e54c2c3329e1839c7ca',
  children: []
}]


// Given an object like this:
// {
//   id: '3881838',
//   name: 'Gwen Stefani',
//   image: 'https://i.scdn.co/image/82a1aaedb700c8e13ae91e54c2c3329e1839c7ca',
//   children: []
// }
// Create a recursive algorithm that will take 2 new input objects, and place them into the 'children' array.

console.log(Artist.all.children);

let lastRoot = Artist.all[0]

function appendArtists(root, a, b) {
  // Expected inputs are root artist, then 2 related artists
  
  // if a & b are true
    // append  & b to parent artist node (event node)
  // else
    // append root to Artists.all[0]
  // return callback()
}

