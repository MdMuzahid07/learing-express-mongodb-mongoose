const fs = require('fs');


// reading text asynchronous

fs.readFile("./mytext/read.txt", "utf-8", (error, data) => {
    if (error) {
        throw Error("error to read file")
    }
    else {
        console.log(data);
    }
})



// write file asynchronous
const data = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, sunt optio consequuntur necessitatibus cumque eos sint delectus quisquam deleniti sit accusamus amet assumenda, placeat blanditiis rem ad asperiores molestias, recusandae est doloremque quos numquam nulla! Nam facilis animi repudiandae quasi voluptates dignissimos, adipisci quis mollitia doloremque quo dolorem asperiores repellat iusto quos dicta nobis! Laudantium, facere culpa? Ea ipsam pariatur sequi laborum maxime at itaque explicabo quasi. Ullam totam explicabo veniam sapiente dignissimos, iure incidunt. Quae quaerat voluptatibus quos impedit ratione aut facere fuga iure quia. Ipsum excepturi incidunt fuga, similique nobis, corrupti quod libero illum, accusantium ducimus nisi nemo reprehenderit. A harum at ipsum perspiciatis adipisci expedita impedit error repudiandae tempore qui dolorum, voluptas sunt ducimus quibusdam consectetur sint modi maxime eius iste quaerat quo eaque dolor nobis. Distinctio ratione nemo debitis ab magnam nostrum ipsa incidunt saepe suscipit dolore quas quisquam fuga, reiciendis quae similique sunt dolorem nam harum necessitatibus vel odit. Quam debitis nisi similique tenetur nihil dolores laudantium magnam, officia blanditiis quo quia ad veniam quae sint harum nulla minus voluptates dicta dignissimos aliquam assumenda saepe. Vel nihil sit veritatis facilis similique expedita iure velit? Reiciendis atque tempora aliquam sed exercitationem dolores ullam at quisquam tenetur harum. Fuga distinctio voluptate earum maiores nostrum at vitae omnis eum, corporis itaque repudiandae iure ut optio fugit id obcaecati sunt incidunt nobis, adipisci corrupti pariatur blanditiis dicta commodi. Ducimus similique error quae doloremque quis labore assumenda reprehenderit eaque fugiat voluptates unde laudantium ex dignissimos, quod debitis optio esse nostrum provident! Tempora, omnis odit. Dolore nobis deserunt corrupti quibusdam voluptas, ullam cum quos consectetur! Hic esse porro unde molestias ut, numquam, eveniet, commodi tenetur quos nihil incidunt itaque? Animi rem corporis autem libero minima? Amet expedita sunt ullam laborum blanditiis repellendus inventore at facere nemo commodi et nesciunt neque praesentium, eveniet cumque dolorum id mollitia perferendis accusantium eum tempore qui. Facere aperiam exercitationem quas sed est earum distinctio corporis a! Ipsa, libero eligendi voluptatibus repellendus voluptas porro nisi at animi quo voluptatum delectus inventore eveniet fuga magnam eaque quasi aperiam a temporibus totam cum, autem assumenda magni in. Nesciunt doloremque inventore dolorum ipsa tenetur optio veritatis porro quam repellat amet quaerat error sunt accusamus laudantium, blanditiis at magni voluptatum rem impedit dicta laborum fuga minus possimus maxime. Commodi odio officiis illo animi quae quis velit natus minus voluptatum, ducimus amet rem quasi corporis iste, aspernatur expedita, eaque a maxime unde sapiente ullam ipsum dignissimos. Dolor, obcaecati, fugit fugiat doloremque iste temporibus expedita sunt, quaerat quas at assumenda? Eum, alias? Architecto aut dolorum asperiores voluptate ipsa incidunt ab praesentium quas ratione ipsum placeat sapiente, doloremque provident accusantium necessitatibus excepturi cumque dolor voluptatibus? Eum facilis inventore cupiditate laboriosam quasi omnis cum nesciunt commodi? Laudantium aspernatur quo recusandae vitae, fugit suscipit? Sapiente dolor facere sed adipisci laudantium minus necessitatibus inventore tempore quasi a sit consectetur beatae omnis, saepe labore cupiditate laborum provident consequuntur ex debitis rem pariatur eligendi? Sapiente dolore magni accusamus hic nihil, quisquam minima quod, animi temporibus, voluptas enim excepturi in!"

fs.writeFile("./mytext/writeAsync.txt", data, "utf-8", (error) => {
    if (error) {
        throw Error("error to write file asynchronous")
    }
    else {
        console.log(data);
    }
})