const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        const res1 = await Restaurant.create(seedRestaurant[0])
        expect(res1).toEqual(expect.objectContaining(seedRestaurant[0]))
    });

    test('can create a Menu', async () => {
        const menu1 = await Menu.create(seedMenu[0])
        expect(menu1).toEqual(expect.objectContaining(seedMenu[0]))
    });

    test('can find Restaurants', async () => {
        await Restaurant.bulkCreate(seedRestaurant)
        const res1 = await Restaurant.findByPk(1)
        expect(res1).toEqual(expect.objectContaining(seedRestaurant[0]))
    });

    test('can find Menus', async () => {
        await Menu.bulkCreate(seedMenu)
        const menu1 = await Menu.findByPk(1)
        expect(menu1).toEqual(expect.objectContaining(seedMenu[0]))
    });

    test('can delete Restaurants', async () => {
        await Restaurant.destroy({where: {id:1}})
        const res1 = await Restaurant.findByPk(1)
        expect(res1).toEqual(null)
    });

    test('can delete Menus', async () => {
        await Menu.destroy({where: {id:1}})
        const menu1 = await Menu.findByPk(1)
        expect(menu1).toEqual(null)
    });
})