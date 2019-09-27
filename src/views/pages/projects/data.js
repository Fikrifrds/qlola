import functions from './functions';

const originalHostName = 'https://qlola-storage.s3-ap-southeast-1.amazonaws.com/';
const thumbnailHostname = 'https://ik.imagekit.io/qlola/tr:w-800/';

const projects = [
    {
      id:1,
      title: 'My Truck',
      slug: function() {
          return functions.slugify(this.title)
      },
      description: 'Repair Management System',
      imgPathName : 'images/project1.png',
      originalHostName: originalHostName,
      thumbnailHostname: thumbnailHostname,
      content: 'We Build a SaaS system to help MyTruck provide an application to manage truck repair.',
      url: 'https://mytruck.herokuapp.com/'
    },
    {
      id:2,
      title: 'Alidjaja',
      slug: function() {
        return functions.slugify(this.title)
    },
      description: 'E-Commerce System',
      imgPathName :'images/project2.png',
      originalHostName: originalHostName,
      thumbnailHostname: thumbnailHostname,
      content: 'We Build Alidjaja Auto Part an E-Commerce system so they can sell auto parts online.',
      url: 'https://alidjaja.herokuapp.com/'
    },
    {
      id:3,
      title: 'PT. Eka Mas Motor',
      slug: function() {
        return functions.slugify(this.title)
        },
      description: 'Digital Presence',
      imgPathName :'images/project5.png',
      originalHostName: originalHostName,
      thumbnailHostname: thumbnailHostname,
      content: 'PT. Eka Mas Motor is an Auto Part Supplier that has many clients in Indonesia, we help them to provide a digital presence so they can reach bigger market',
      url: 'https://fikrifrds.github.io/ptekamasmotor/'
    },
    {
      id:4,
      title: 'Room Scheduling App',
      description: 'Room Scheduling App in Chemical Engineering Department - ITS',
      slug: function() {
        return functions.slugify(this.title)
        },
      imgPathName :'images/project3.png',
      originalHostName: originalHostName,
      thumbnailHostname: thumbnailHostname,
      content: 'We Build Room Scheduling App to manage Room Booking in Chemical Engineering Department - Sepuluh Nopember Institute of Technology.',
      url : 'https://ruang-tekkim.herokuapp.com'
    },
    {
      id:5,
      title: 'Thesis Management',
      description: 'Thesis Management in Chemical Engineering Department - ITS',
      slug: function() {
        return functions.slugify(this.title)
    },
      imgPathName :'images/project4.png',
      originalHostName: originalHostName,
      thumbnailHostname: thumbnailHostname,
      content: 'Thesis Management in Chemical Engineering Department - Sepuluh Nopember Institute of Technology.',
      url: 'https://tugas-penelitian.herokuapp.com'
    }
  ]

export default projects