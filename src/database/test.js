const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    await saveOrphanage(db, {     
            lat: "-27.2170319",
            lng: "-49.6550246",
            name: "Lar do amor",
            about: "Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp: "48998866554",
            images: [
                "https://images.unsplash.com/photo-1614270262860-f20d4c6ab4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIxMzg2NDIy&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
                "https://images.unsplash.com/photo-1621171464391-b67608f492c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIxMzg2NDIy&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visitas Das 8h até 18h",
            open_on_weekends: "1"
    })

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})