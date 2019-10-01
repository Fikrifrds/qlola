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
      imgPathName : 'images/project1/project1.png',
      originalHostName: originalHostName,
      thumbnailHostname: thumbnailHostname,
      content: 'We Build a SaaS system to help MyTruck provide an application to manage truck repair.',
      url: 'https://mytruck.herokuapp.com',
      imageCollectionPathName: 
      [
        {urlPathName: 'images/project1/project1a.png', description: 'Dashboard Page'}, 
        {urlPathName: 'images/project1/project1b.png', description: 'Inventory List'}, 
        {urlPathName: 'images/project1/project1c.png', description: 'Create New Inventory'}, 
        {urlPathName: 'images/project1/project1d.png', description: 'Bulk Import Inventory from CSV File'}, 
        {urlPathName: 'images/project1/project1e.png', description: 'Truck List'}, 
        {urlPathName: 'images/project1/project1f.png', description: 'Repair List'}, 
        {urlPathName: 'images/project1/project1f2.png', description: 'Repair Detail'}, 
        {urlPathName: 'images/project1/project1g.png', description: 'Repair History from a single Truck'}, 
        {urlPathName: 'images/project1/project1h.png', description: 'Task List'}, 
        {urlPathName: 'images/project1/project1i.png', description: 'Mechanic List'}, 
        {urlPathName: 'images/project1/project1j.png', description: 'Purchase Order List'}, 
        {urlPathName: 'images/project1/project1k.png', description: 'Create New Purchase Order'}, 
        {urlPathName: 'images/project1/project1l.png', description: 'Purchase Order Detail'}, 
        {urlPathName: 'images/project1/project1m.png', description: 'Supplier List'}
    ]
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
      url: 'http://alidjaja.qlola.com',
      imageCollectionPathName:
      [
        {urlPathName: 'images/project2/1.png', description: 'Product List'}, 
        {urlPathName: 'images/project2/2.png', description: 'Showing Search Result of "velg"'}, 
        {urlPathName: 'images/project2/3.png', description: 'Showing Search Result of "breaker"'}, 
        {urlPathName: 'images/project2/4.png', description: 'Shopping Cart'}, 
        {urlPathName: 'images/project2/5.png', description: 'Checkout and Choose Courier Service'}, 
        {urlPathName: 'images/project2/6.png', description: 'Order Successfully Placed'}, 
        {urlPathName: 'images/project2/7.png', description: 'Order Page'}, 
        {urlPathName: 'images/project2/8.png', description: 'Payment Confirmation'}, 
        {urlPathName: 'images/project2/9.png', description: 'Admin Dashboard'}, 
        {urlPathName: 'images/project2/10.png', description: 'Product List'}, 
        {urlPathName: 'images/project2/11.png', description: 'Create New Product'}, 
        {urlPathName: 'images/project2/12.png', description: 'Product Detail'}, 
        {urlPathName: 'images/project2/13.png', description: 'Category List'}, 
        {urlPathName: 'images/project2/14.png', description: 'Order List'},
        {urlPathName: 'images/project2/15.png', description: 'Payment List'},
        {urlPathName: 'images/project2/16.png', description: 'Customer List'},
        {urlPathName: 'images/project2/17.png', description: 'Asset Management'},
        {urlPathName: 'images/project2/18.png', description: 'Setting Page'},
    ]
    },
    {
      id:3,
      title: 'Room Scheduling App',
      description: 'Room Scheduling App in Chemical Engineering Department - ITS',
      slug: function() {
        return functions.slugify(this.title)
        },
      imgPathName :'images/project3/project3.png',
      originalHostName: originalHostName,
      thumbnailHostname: thumbnailHostname,
      content: 'We Build Room Scheduling App to manage Room Booking in Chemical Engineering Department - Sepuluh Nopember Institute of Technology.',
      url : 'http://ruangdtkim.qlola.com',
      imageCollectionPathName: 
      [
        {urlPathName: 'images/project3/project3.png', description: 'Room List'},
        {urlPathName: 'images/project3/project3aa.png', description: 'Create New Room'},
        {urlPathName: 'images/project3/project3a.png', description: 'Room Detail'},
        {urlPathName: 'images/project3/project3b.png', description: 'Room Schedule'}, 
        {urlPathName: 'images/project3/project3c.png', description: 'Transaction List'}, 
        {urlPathName: 'images/project3/project3d.png', description: 'Transaction Detail'}, 
        {urlPathName: 'images/project3/project3e.png', description: 'Create New Transaction'}, 
        {urlPathName: 'images/project3/project3f.png', description: 'User Profile Page'}
      ]
    },
    {
      id:4,
      title: 'Thesis Management',
      description: 'Thesis Management in Chemical Engineering Department - ITS',
      slug: function() {
        return functions.slugify(this.title)
      },
      imgPathName :'images/project4/project4.png',
      originalHostName: originalHostName,
      thumbnailHostname: thumbnailHostname,
      content: 'Thesis Management in Chemical Engineering Department - Sepuluh Nopember Institute of Technology.',
      url: 'http://www.tugasakhirdtkim.com',
      imageCollectionPathName: [
        {urlPathName: 'images/project4/1.png', description: 'Proposal Detail'},
        {urlPathName: 'images/project4/2.png', description: 'Thesis Deail'},
        {urlPathName: 'images/project4/3.png', description: 'Input Task'},
        {urlPathName: 'images/project4/4.png', description: 'Asessment List'},
        {urlPathName: 'images/project4/5.png', description: 'Asessment Detail'},
        {urlPathName: 'images/project4/6.png', description: 'Asessment Schedule'},
      ]
    },
    {
      id:5,
      title: 'PT. Eka Mas Motor',
      slug: function() {
        return functions.slugify(this.title)
        },
      description: 'Company Profile',
      imgPathName :'images/project5.png',
      originalHostName: originalHostName,
      thumbnailHostname: thumbnailHostname,
      content: 'PT. Eka Mas Motor is an Auto Part Supplier that has many clients in Indonesia, we help them to provide a digital presence so they can reach bigger market',
      url: 'https://fikrifrds.github.io/ptekamasmotor',
      imageCollectionPathName: [
        {urlPathName: 'images/project5/1.png', description: 'Home Page'},
        {urlPathName: 'images/project5/2.png', description: 'Product Page'},
        {urlPathName: 'images/project5/3.png', description: 'Contact Us Page'},
        {urlPathName: 'images/project5/4.png', description: 'About Us'}
      ]
    },
  ]

export default projects