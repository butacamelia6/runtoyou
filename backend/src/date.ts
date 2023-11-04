

export const sample_foods: any[] =[
    { 
        id:'1',
        name: 'Ramen',
        price: 35,
        cookTime:'25-40',
        favorite: true,
        origins: ['Japan'],
        stars: 5,
        imageUrl: 'assets/img/food-1.jpg',
        tags: ['AsianFood', 'Hot'],
    },
    { 
        id:'2',
        name: 'Carbonara',
        price: 32,
        cookTime:'15-30',
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'assets/img/food-2.jpg',
        tags: ['ItalianFood', 'Eggs', 'Cheese'],
    },
    { 
        id:'3',
        name: 'Paella',
        price: 50,
        cookTime:'40-50',
        favorite: false,
        origins: ['Spain'],
        stars: 4.5,
        imageUrl: 'assets/img/food-3.jpg',
        tags: ['SpanishFood', 'Seafood'],
    },
    { 
        id:'4',
        name: 'Tacos',
        price: 30,
        cookTime:'30-40',
        favorite: true,
        origins: ['Mexico'],
        stars: 3.5,
        imageUrl: 'assets/img/food-4.jpg',
        tags: ['MexicanFood', 'Meat'],
    },
    { 
        id:'5',
        name: 'Chicken Masala',
        price: 25,
        cookTime:'35-40',
        favorite: false,
        origins: ['India'],
        stars: 4.5, 
        imageUrl: 'assets/img/food-5.jpg',
        tags: ['IndianFood', 'Hot'],
    },
    { 
        id:'6',
        name: 'Sarmale',
        price: 35,
        cookTime:'40-50',
        favorite: false,
        origins: ['Romania'],
        stars: 4,
        imageUrl: 'assets/img/food-6.jpg',
        tags: ['RomanianFood', 'Hot'],
    },

];

export const sample_tags:any[] = [
    { name: 'All', count: 6 },
    {name:'RomanianFood', count: 1},
    {name:'IndianFood', count: 1},
    {name:'MexicanFood', count: 1},
    {name:'AsianFood', count: 4},
    {name:'ItalianFood', count: 2},
    {name:'SpanishFood', count: 3},
]

export const sample_users: any[] =[
    { 
        name: 'Buta Camelia',
        email: 'butacamelia@gmail.com',
        password: '$10Iuniestezi',
        address: 'Poiana Ilvei',
        isAdmin: true,
    },
    { 
        name: 'Pop Lorena',
        email: 'poplorena@gmail.com',
        password: '$10PopLorena',
        address: 'Livezi',
        isAdmin: false,
    },
]