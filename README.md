# Tasks API

## Description

This is a simple API that allows you to create, read, update and delete tasks. It is built using Node.js, Express.js and MongoDB.

> Preview: [Tasks API](https://web-production-8d7a.up.railway.app/api/tasks)

## Setup

1. Clone this repo
2. Run `docker-compose up` to start the server
3. (Optional) Change the URI string in the .env file to connect to your own MongoDB instance or hardcode it into the `app.js` file. See [Connect to MongoDB](#connect-to-mongodb) for more details.
4. Run the endpoints in your browser or Postman. See [Endpoints](#endpoints) for more details.

## Endpoints

If you run your code locally replace the url before the endpoints with `localhost:3000`. The API has the following endpoints:

| Method | Endpoint       | Description         | URL & Params                                                                                                         |
| ------ | -------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/tasks     | Get all tasks       | [https://web-production-8d7a.up.railway.app/api/tasks](https://web-production-8d7a.up.railway.app/api/tasks)         |
| GET    | /api/tasks/:id | Get a task by id    | [https://web-production-8d7a.up.railway.app/api/tasks/:id](https://web-production-8d7a.up.railway.app/api/tasks/:id) |
| POST   | /api/tasks     | Create a new task   | [https://web-production-8d7a.up.railway.app/api/tasks](https://web-production-8d7a.up.railway.app/api/tasks)         |
| PUT    | /api/tasks/:id | Update a task by id | [https://web-production-8d7a.up.railway.app/api/tasks/:id](https://web-production-8d7a.up.railway.app/api/tasks/:id) |
| DELETE | /api/tasks/:id | Delete a task by id | [https://web-production-8d7a.up.railway.app/api/tasks/:id](https://web-production-8d7a.up.railway.app/api/tasks/:id) |

## Connect to MongoDB

There are three ways to connect to a MongoDB instance:

1. Atlas Cloud: Add your URI string to the .env file
2. Local: Add your URI string to the .env file or hardcode into the `app.js` file
3. Dockerfile: To connect to the mongo instance created by the Dockerfile in this repo you can hardcode the string:
   `mongodb://mongo:27017/tasks_db` as the URI or,
   add to your .env file `MONGO_URI="mongodb://mongo:27017/tasks_db"`

## Stack

- Node.js
- Express.js
- MongoDB
- Docker

### Dependencies

- dotenv
- mongoose
- nodemon

> Note: You can see all the dependencies in the [package.json](./package.json) file

## Author

This project was created by [Anel Canto](https://github.com/anelcanto). Add a star if you like this repo :smile:.

```
final-project-anelcanto-1
├─ .dockerignore
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 0abc281e9531b3e236cfe4122ada23b884a5d9
│  │  │  ├─ 1614a867712efa73c043c2416eaa64aeab355d
│  │  │  ├─ 2a5aaab4f92efc62731dea7a7f85907413c92c
│  │  │  └─ f1cf34e707eafc791eec73f32b35d4c7834c48
│  │  ├─ 01
│  │  │  ├─ 16b397c4ffe5621906582b4711bcea7d881471
│  │  │  ├─ 98bb3d6cb0318b3aba3c13c4cca84852db3245
│  │  │  └─ d7f09df8659fe74eecda3102c6aa985b0a22ec
│  │  ├─ 02
│  │  │  ├─ 69d1bc0f77308ac4971be06095eacf55f5724a
│  │  │  └─ d71061e108a72fb5f9ca87f731ad6db9c7b1c1
│  │  ├─ 03
│  │  │  └─ 6b296e90c4ece5837b84cd769a454e003f8c6f
│  │  ├─ 04
│  │  │  └─ 272c0f246c8ddae477af277a8403ae33e15e82
│  │  ├─ 05
│  │  │  ├─ 2414d2b7635f1740f663d9d487404ae071bef2
│  │  │  └─ b8e0c3c0ea812939b6ca8ef2595646b06c7da6
│  │  ├─ 06
│  │  │  └─ 4f5d59e47f10fbb41d293d967bbd7a59477ace
│  │  ├─ 08
│  │  │  └─ 7e8425d19551f8d31ab8ce1b557aec00ac0bff
│  │  ├─ 09
│  │  │  └─ 5edcb52bcb07edfd6ed8f70631fd4987ab11fc
│  │  ├─ 0a
│  │  │  ├─ d2567aaeb0f357b85b1dbcb68660d50da5a87f
│  │  │  └─ f06df541bf47ed764b52aa21332a15dcd015df
│  │  ├─ 0c
│  │  │  ├─ cf18e65ba327350a41884e46bc69dee30b38ee
│  │  │  └─ e59df458171a6161b4a4d7586f3abeb1ae5d52
│  │  ├─ 0e
│  │  │  └─ feed6cc32fb1a7fc97059eed0d54a084d2e542
│  │  ├─ 0f
│  │  │  ├─ 1baf05272274728bff891509c2c89e717dbddb
│  │  │  └─ df7319d64adfe310542f656f1468b1407c2d83
│  │  ├─ 10
│  │  │  ├─ 23880a80518e27895c0b5d172b8420c26b56fd
│  │  │  └─ 343a03463af3a5b54c5c7d1a59d250db27e6a6
│  │  ├─ 12
│  │  │  └─ 346002ed3c0fd07b31077897c171f1c1a64a32
│  │  ├─ 13
│  │  │  ├─ b81ccab0ba427efd68465c47a3a4c18855eec2
│  │  │  ├─ ee56353354d9e998d411d964cfd76d38a1104d
│  │  │  └─ f5e320a40735368cb52e2da1c7b2cbf9cf3bd8
│  │  ├─ 15
│  │  │  ├─ 2439abbe31d07871a25bd524053f3947f61a3a
│  │  │  └─ 7cdcc8ec087e9b0d565ecf16f8c501588d1f74
│  │  ├─ 17
│  │  │  ├─ 8e0ef9ac7ff69f0908fe6e37191c5c8d1c4e83
│  │  │  ├─ c63978e22c225f67486cf3deab6b3fc56df7d9
│  │  │  └─ dc219d1dec3f027d6983263690e6f1179343bc
│  │  ├─ 18
│  │  │  └─ 50edd3c600f74fcf871c319f416a4f4f98bd22
│  │  ├─ 19
│  │  │  ├─ e803ba183521c50bd72492ba7aef3793f7a158
│  │  │  └─ ea87d1bdfba8915b70f9f8d06d26894f26ce58
│  │  ├─ 1a
│  │  │  ├─ 5e3766412982b1aeaa08babad20e432d948180
│  │  │  └─ 6abc7d6e9797149df2621923efae22e9accaa0
│  │  ├─ 1c
│  │  │  └─ 91e5e2690c5f01f500df1439278e47dd7b41f3
│  │  ├─ 1d
│  │  │  ├─ 02649e044b41827f11925a02fac79ba61d28a8
│  │  │  ├─ 5589851ffad7e0e47ae5e71227f2c5580428ea
│  │  │  └─ a0cd6f6dce4bc0f211793b197a3b270e533584
│  │  ├─ 1e
│  │  │  └─ 89811304c101fb0e4625400727fb20b1a5021c
│  │  ├─ 20
│  │  │  └─ 7d05172feb1046e8d51c675fe501ed07ead3cd
│  │  ├─ 22
│  │  │  ├─ 4deaa54aafa08590539f40744295ac44c1a979
│  │  │  ├─ 645a00a958d4e5ac366a47ebafc3167e1dddcb
│  │  │  ├─ 8a2c89e7d47c94122c467f0f033c9219199de7
│  │  │  └─ 949e6710f400cec94a02c21477200baa2db145
│  │  ├─ 23
│  │  │  └─ 45573a54f899f2fe319cc79e8f86ac9589cbce
│  │  ├─ 26
│  │  │  └─ 2b88078ebc26d1d49115d02c436ee3a75bb3d1
│  │  ├─ 27
│  │  │  ├─ 4b27e6af56e183fc139b16f0513933b32760df
│  │  │  ├─ 8cc1f00cf7b5130d59167b3809494df61d7f68
│  │  │  ├─ c441c2cacd8db6bbb18b1b15037ebd2eba5339
│  │  │  └─ e94d1a762ebec2b0b90e780153957f217af0fe
│  │  ├─ 29
│  │  │  ├─ 616e123762fc26b64017b759d4ed5bf84a44c0
│  │  │  ├─ 6522434037f21a3d9294f41a708c88ea4a2d1f
│  │  │  └─ b4776833e4b2b63b4c0f488a0b57ec1e49e498
│  │  ├─ 2a
│  │  │  └─ 128a98cc00f1070d00dbcc4945754c930737c6
│  │  ├─ 2c
│  │  │  ├─ 6a63e0b07dd07160db26fc651bd55b438a08fd
│  │  │  └─ c856968c0b296dbd8cb9b42f92a47f548b8efd
│  │  ├─ 2d
│  │  │  ├─ 3e79060701b663899d6b49cfe6ecb96425ce3c
│  │  │  ├─ 462b8af4802336863338d0714e5451a457ac07
│  │  │  └─ d2fcb0b057d0de56990ad41692550183830c09
│  │  ├─ 30
│  │  │  └─ 0cf7fe1db83dd1ed58728abc441880b7a78800
│  │  ├─ 33
│  │  │  ├─ 57adfa773d8d4236c82536dddc0604a5e6bf75
│  │  │  └─ f501b1764d0b68ce18993f8748afc3ce149c7c
│  │  ├─ 36
│  │  │  └─ cff19e8e42213657f3fbdcee08dd0e23e9c65e
│  │  ├─ 38
│  │  │  └─ ad562124dc245c2a7ffc9bf5ff1b46b0438080
│  │  ├─ 39
│  │  │  └─ fccb3d635f7df304f386ba689b2e4bf8a02125
│  │  ├─ 3a
│  │  │  └─ c6c54df5e72f7635671ce0b4d935946dc29b2e
│  │  ├─ 3c
│  │  │  ├─ 678019dd05111de422e0a1aa209eb922c83d36
│  │  │  ├─ b3bf02b5c8b362569ee4b2f7cc9be845d03865
│  │  │  └─ e5eff3a88a696e15f308cd080feac0b9491818
│  │  ├─ 3d
│  │  │  ├─ 2086468954c1ef6ef8017ce0b5fadf10f209d6
│  │  │  └─ d02da4ffdbb065eca01c17acec371cfe4ea1c0
│  │  ├─ 3e
│  │  │  └─ edd1caa40a0db02f9266e7efdb1c9c46837063
│  │  ├─ 3f
│  │  │  ├─ 72dff29a69612c14eaec559e2a11bcced48b5b
│  │  │  └─ e59afd1f36d5989776870daa6a21e628b02467
│  │  ├─ 40
│  │  │  ├─ a2b63a0b2431d40f70ef988acd021d04904fb2
│  │  │  └─ f04376c95a170d58e5112579c9cb31ce73bc07
│  │  ├─ 41
│  │  │  ├─ 6257034927bfd45f9beb721242ca2459b59b49
│  │  │  └─ ebf40c610dca6cb1b552f47fce5710ae3fdea3
│  │  ├─ 46
│  │  │  └─ 8fefcdd76560c68a8cba8d831da6421c93554f
│  │  ├─ 48
│  │  │  ├─ 52b4a078d736484afa78c6b3231e36e8c9b3c1
│  │  │  ├─ 5a971954c33e983e2f718228a3d80723f34643
│  │  │  └─ 920de3ef1e1016659d540cbd53c12f7a671d6c
│  │  ├─ 49
│  │  │  ├─ 19a0cf16c84318cee93a49417b512ec2fe549b
│  │  │  ├─ 5827aded4c735b0d8e691624cc1997e0d39d74
│  │  │  ├─ c0cfdf5747b1941e31221c7c3d7260920f27bb
│  │  │  └─ e4b4e67b0c730b2d2a47176e7525cb98db06ff
│  │  ├─ 4a
│  │  │  ├─ 7b4499cff9c074f235fa2fb66bcfa2601f6730
│  │  │  ├─ 82e9e4e217ac9d6ed2dc0f7834770b4f0b3719
│  │  │  ├─ e1f47efc8f2312c0229095c9dfc64c317c6aa1
│  │  │  └─ f9ddee463f4ac5eeda365926af401b6ce85481
│  │  ├─ 4b
│  │  │  ├─ 66874b7fd056ccb0fb2410d842a00248c4f3d4
│  │  │  └─ a303b5e201f829312d47c8578b7b9275d8a1ee
│  │  ├─ 4c
│  │  │  ├─ 5cb83742574b26e5e4884c7d2e17f596ef65a2
│  │  │  └─ 846415185ec6b31721281a2231f3d682aefbd0
│  │  ├─ 4d
│  │  │  └─ 0db14fa8171ddc44f5a411e5de1ccc1c0f3baa
│  │  ├─ 4e
│  │  │  └─ 1febbf2e1e6b4040f6843f3f103153bd286bbf
│  │  ├─ 4f
│  │  │  ├─ 2d4b2ee4014e0d4f17d8d5679b908961010c22
│  │  │  ├─ 5f2e317975f62b0ef3f6c229d9ef865039ffc5
│  │  │  └─ a9aef12148d69b2ce2e86a27d9161aeec27776
│  │  ├─ 51
│  │  │  └─ 4a731ff1f2cd5fef2b6422ad91c74257d7332d
│  │  ├─ 52
│  │  │  ├─ 0245445f1e25284948f13feb2819d56a186ba5
│  │  │  └─ 72e00e9482fe9c5f3ca1634be47ec0d8fdf194
│  │  ├─ 55
│  │  │  ├─ 0c331ac5bd33afa7df4ccb9304c19eb4c14819
│  │  │  ├─ 3eb4011d2d89b4eabb66dc554054150d1b59d0
│  │  │  ├─ 85545212829572f5525266d3891b1e7477c10b
│  │  │  └─ 987a440d196ed5e0709c09cce342684d25a6c2
│  │  ├─ 56
│  │  │  └─ cc20fa4d69307a5eef5d871248838402e54c90
│  │  ├─ 58
│  │  │  └─ d1f122e4ca89e5f99738da116f6b2d8d1a8510
│  │  ├─ 5a
│  │  │  ├─ 20b7bae5cdbfb0a8fb8115b8bfc73682c95285
│  │  │  ├─ 80c99d4f154d6c70322c11e1af8b79da3a0f50
│  │  │  └─ bcdca8d8a1c081e25d1b64db1555d9095a70c5
│  │  ├─ 5b
│  │  │  └─ e40c381e89f2fe48866a8797fb324286534f7c
│  │  ├─ 5e
│  │  │  ├─ 23cb85270af0e98b2517443dc66e69ea86d8d8
│  │  │  └─ e9f5186fd92bba66b2c3d0358af8f9d49d80eb
│  │  ├─ 5f
│  │  │  ├─ 19b201d312a5c42104eb063fe89e1715b70f55
│  │  │  └─ 9d96fb083efc8631fa0f6df723e9ca90e97fa2
│  │  ├─ 61
│  │  │  └─ d0f625c5541ed78a83a65099ba281c6c60525e
│  │  ├─ 62
│  │  │  ├─ 36043c1cc7989702e545eaec14baf85a7eabe1
│  │  │  └─ c29b2261a41242a385450a5a2865fbd81fd79d
│  │  ├─ 64
│  │  │  ├─ 16006f9464059f845a0f6cd9478c94ee974a77
│  │  │  ├─ 1a2fc8e63781a86041ad47a336c076a15ab824
│  │  │  ├─ 70ff186f0862ec60b2c1f7c27345750c2f87f7
│  │  │  └─ d44b36dad9b8e8af8ef500609a74e347c16c13
│  │  ├─ 65
│  │  │  └─ e2f95485f7b1d7ec2e6146cdfbb2e4e3130a24
│  │  ├─ 66
│  │  │  ├─ 035bbfe4bdc320c6517aa523d1e4d713ccbea3
│  │  │  └─ 5df16c010b907a556748c4ffb4d462ecad8695
│  │  ├─ 67
│  │  │  └─ bd3fb95ac456fe9db0f5349152743fdbc8c73f
│  │  ├─ 68
│  │  │  ├─ 7397d6b21098157f5ce6d1a7415d06ccce6736
│  │  │  └─ ecc32b8ce39eff4bf8aec9da9b4b259bb4f397
│  │  ├─ 6a
│  │  │  └─ c60d642e7a4221513f703bda379f80a23111ef
│  │  ├─ 6b
│  │  │  ├─ 220380de30aeeedceb2a96cdb727e90a2b2209
│  │  │  └─ b1b2ac26d1c50a8f4cb7722b271ba7edf7e09d
│  │  ├─ 6c
│  │  │  ├─ 0c08737e5f05160415f8841200fc09f39dd315
│  │  │  └─ 3630c56c29c75d9e831e1636b737ee10616334
│  │  ├─ 6e
│  │  │  ├─ b0cc4b7be41df1c4d0a509f96170c1f284e407
│  │  │  └─ d804c11c837541abc041fb5e88a132c1f09573
│  │  ├─ 70
│  │  │  ├─ 97d41e39de5df4544966717dc8c9de0871a5de
│  │  │  └─ 9913a8f8a31211bb7605836c4d4e22a00facdc
│  │  ├─ 71
│  │  │  ├─ 5c8abe168b9d46fe6134e332c791b5914cdffb
│  │  │  ├─ cab72fbca80573f3f2647f8b5bc9a4fcba943a
│  │  │  └─ e64739347fd5e0fc3419dabb185fa08a5ea28e
│  │  ├─ 72
│  │  │  └─ 3d5daabf91ec570fffb165788391398b6ea35b
│  │  ├─ 73
│  │  │  └─ ab8601a513a01bd4ae0ff6fdc70526e2861174
│  │  ├─ 74
│  │  │  └─ 36a88de64e984193c3a19a90311c931f949901
│  │  ├─ 75
│  │  │  ├─ 82f3575cc2832d61826093fe266a5bb76a70e6
│  │  │  └─ dfc56e4c4e826557f91f3bd2b180098b1c46bf
│  │  ├─ 76
│  │  │  ├─ 53bf8022fc368d20ffcbed19f2be9e659dadfd
│  │  │  ├─ 56ceccec69a54fac1dc54e595f5c2c5c478188
│  │  │  ├─ 9c8f2019f614d2388e58d6b188e0584ade9884
│  │  │  └─ fca92c048c88a3fb52cc89b7b699a74b75725c
│  │  ├─ 77
│  │  │  └─ 1d39da55e1f91160f31e7318a8f8edfa043922
│  │  ├─ 78
│  │  │  └─ c579d19ce6f592098ef80aa5b8336ad610406f
│  │  ├─ 79
│  │  │  └─ 5a2ccef3b915525ff7d5fd083c214f293fd284
│  │  ├─ 7a
│  │  │  ├─ 782c8e6b497b66ba261f8fcbe54ea19e86f6c7
│  │  │  ├─ c134266d76bcff7d0b0d9d898a6b6e2906152e
│  │  │  └─ cbf8ea815fbd43583dd5227d481a94f36c96fc
│  │  ├─ 7b
│  │  │  └─ 65fc3fcb647940357ccbb917222557ad42575a
│  │  ├─ 7c
│  │  │  ├─ 55391b741dc92ac960a226fdd41bfbd3c25823
│  │  │  └─ c7154be2026b4066e7eef060dba45d0a409883
│  │  ├─ 7d
│  │  │  ├─ 0aff3c03c270d5d5c7b6a3e355b87f585f8ead
│  │  │  ├─ 10b530fa17044c46090b37604c5752eca694a8
│  │  │  ├─ 4644b5c558f252017ff07051e8e062bf345b6a
│  │  │  ├─ a130bfb6e2e5e7eecf52f5280249a9b86c3365
│  │  │  └─ e35055ce7cb13477e9f2dc1cd70cb31aa25a43
│  │  ├─ 7e
│  │  │  └─ 35638df3f59004c34a89bc4fe455e6f935b284
│  │  ├─ 7f
│  │  │  ├─ 7b793d89cdc5befac35c06f68778ce02d566ca
│  │  │  ├─ 8066a1be7f51d59eee767f7a4ded3a8206be8b
│  │  │  └─ 82886eb51eca77803890fe1ac6c3c6d48db8bd
│  │  ├─ 80
│  │  │  ├─ 024d6f663b9179820b93123b5239391d9867b7
│  │  │  ├─ 057093f933b41563defec6ddaddde987f6d3e7
│  │  │  └─ c77a4be29ce9c9ba4877c926d5e473a36fc9bc
│  │  ├─ 82
│  │  │  └─ 682c8654b6b41de923e7f6ec11ba210514d463
│  │  ├─ 83
│  │  │  └─ 7e5036ca4d3c273eb0a991f5b15d66ad42bf9f
│  │  ├─ 84
│  │  │  └─ 64812ef71fb02ee0557996ab740b83e5c07b18
│  │  ├─ 85
│  │  │  ├─ 1415fba878c0450cfe28a1c09ce2713ee2b86d
│  │  │  ├─ 601860b9013e7dedcd2b197709e94b0d5d1cf7
│  │  │  └─ 7926ad9640f7bba19532a6bb55d20a037e496d
│  │  ├─ 86
│  │  │  └─ 694b065b315cca126c9621972ea9519a9b83e3
│  │  ├─ 87
│  │  │  ├─ 36cc2153fd5bb530abc5272af94a3c10f91d39
│  │  │  └─ 7dff9d9266a3d5d817b12d854388190d2d9d23
│  │  ├─ 88
│  │  │  └─ 48afcd36384af9a44ddeacffdf84c18da1f4bb
│  │  ├─ 89
│  │  │  ├─ 27207288bf8bae08928cb269d3ce4cae6be9f5
│  │  │  ├─ 315fd76758e28a29eb0e056313fec3c69e1754
│  │  │  └─ 48c1b40ee22fa59afd389b4347d66f8a7cf502
│  │  ├─ 8c
│  │  │  ├─ 91b72e3c0e4d846d9a8066cfa352e8e3bcb3dc
│  │  │  ├─ dd7e0f2f5b9a85a7fc6a6de435835f49225703
│  │  │  └─ f0d080840036f94ebcb0cebb352eb5e8686667
│  │  ├─ 8d
│  │  │  └─ 5d8039b50d021fded1a951d4feb0ab165bd21f
│  │  ├─ 92
│  │  │  ├─ 99a28edb0ff57d639b25ac2aaffdd4489dd4d0
│  │  │  └─ c4f1f4f48e01c06bc86a8f13d35acc9c20e687
│  │  ├─ 93
│  │  │  ├─ af4489d3186428e687ece05c35cac396bdf831
│  │  │  └─ e705ea4a08dd705b55464eba645e1fcb0640a1
│  │  ├─ 94
│  │  │  └─ 03e85145da97f8fcc530b9901090fa3f35689f
│  │  ├─ 95
│  │  │  ├─ 17b7d995bb03dac38752e8653595d6c63bfa84
│  │  │  └─ 48e3c391f0e733ec9a30f55c1fddfbd625fc51
│  │  ├─ 97
│  │  │  └─ bcc1879e99ce47481e6a6bc0acd1d3bf40f95c
│  │  ├─ 99
│  │  │  └─ 57e19156e21e95133decb33760f776b5bac43b
│  │  ├─ 9a
│  │  │  └─ 28f6afccc5af89cbc07225a8a994b1e8cb5977
│  │  ├─ 9b
│  │  │  ├─ 04cdcd811b15e8ae4a45bb19ba92df21ff00b0
│  │  │  └─ 292fbc3d79098dd28002eccec4da1268f835fc
│  │  ├─ 9c
│  │  │  └─ 8deb3eb7b29276a166760b2706c998c31a69ce
│  │  ├─ 9d
│  │  │  └─ 74cd27f40e89dc256d8370710b749977d56fc0
│  │  ├─ 9e
│  │  │  └─ 74c0c6c328a601a1715a5abe6026bae185929f
│  │  ├─ a0
│  │  │  ├─ 69bb8945798f9266a302ad0525c9bf5fe2ca66
│  │  │  ├─ 70942cab9df0aea78c3843b71c13a98ec8aa4b
│  │  │  ├─ b52a7090d0c79ce033d0f71442c00dd1efcc5c
│  │  │  └─ c112fc9b0d8f36f4caee317c01b80f958d40ea
│  │  ├─ a1
│  │  │  ├─ 45ead42d6dcc437770bc84fff5d4912c4cda3d
│  │  │  ├─ 60f57420cb4c67b69165d51a1c5b40de22af9e
│  │  │  ├─ 7a3937e6b8e13879fbb2512747178a347081b3
│  │  │  └─ eb2b1ea237c2a2d98de233713345e96ea03f66
│  │  ├─ a3
│  │  │  └─ 0a5f25b606eb287098168fd305f27e1c218ea9
│  │  ├─ a4
│  │  │  └─ 7e88877f5b8bce0149bbb7fc9405f9fb04d4a3
│  │  ├─ a5
│  │  │  └─ bf3cf67104b2844c2b172b483314fced13e862
│  │  ├─ a6
│  │  │  └─ c80f9fc1b8b613ba64efbc1137b7eef3b4cbe7
│  │  ├─ a7
│  │  │  ├─ 573452daa6a1df9e654bc57f7afd0b97849201
│  │  │  ├─ 74c88484fc224742d46d4e9166a471262df532
│  │  │  └─ ee9ec45fcd26d34e9d19f18f046fe9fce66881
│  │  ├─ a9
│  │  │  ├─ 7bf2a108df2dc34563500e109b98e910169684
│  │  │  ├─ 929f1175ef7de5f186c49b13d20b127ac33b5d
│  │  │  └─ cba4b856d046212a2a2f13fb911ae1deb4c3b5
│  │  ├─ ab
│  │  │  ├─ 05d38dd835755273d310ea4bceccd668f82422
│  │  │  └─ 7dabe726f3bfbbfa244e2b5ee46474cafbbe6c
│  │  ├─ ac
│  │  │  └─ 2d0650eae4266defa04cefc023407fa0cfa980
│  │  ├─ ae
│  │  │  ├─ 504e3d9304932d1c6c55d81b0a4b17def57eea
│  │  │  └─ 86d563f5cf69dda4ff601b88d385b16425b1ef
│  │  ├─ af
│  │  │  └─ 8123db4d7ff4bff6873d39223f7bd918340303
│  │  ├─ b0
│  │  │  └─ 4f4ddb674653a50f4417c13f843ac89646cba6
│  │  ├─ b2
│  │  │  └─ eb01960d1d2e6f0d13ba61359851906316410d
│  │  ├─ b4
│  │  │  ├─ 30b3a921da021434ebee15131b966d59690fab
│  │  │  ├─ 8b559297dc1bb055f1d7b187de1bcab8b72ef4
│  │  │  └─ 8febafb69182af21089af4f446b5a7299d9a37
│  │  ├─ b5
│  │  │  ├─ 069cb14d7a860f9ad25bac7c62b874a5e1da8b
│  │  │  ├─ 2a5eb151c008d10030dfd9571cc11ae5e9f883
│  │  │  └─ ba6cad582088b0f691f82984b617a9200a18bc
│  │  ├─ b6
│  │  │  └─ f80b1f8ffd7658a11af977a9df3c296008d4cd
│  │  ├─ b8
│  │  │  ├─ a0912e5ed8aa63d632f0b19c1759695085670f
│  │  │  └─ e63f849841e00f14c90b74a8a3aa6ea5f094ce
│  │  ├─ b9
│  │  │  ├─ 0a17c46f3241fd62835c53e885374870455282
│  │  │  └─ 0d329c3e748d7341ca4f817daaba61999d0aeb
│  │  ├─ ba
│  │  │  └─ db1bafabe634a3093a1760af3d4ef54df5d207
│  │  ├─ bb
│  │  │  ├─ 975bbd4c7d61834906db3017a9e6a902d8268c
│  │  │  └─ e9ee3d19ac82e7b21b503b99bfbe9a7a7b8ae1
│  │  ├─ bc
│  │  │  ├─ 4dc5f138a3579ada193e447d0c39aa3696e35e
│  │  │  ├─ 8fb9d39a9e94b726f05089deae90ec93cb9ed2
│  │  │  └─ ef2bd99f65a863f540b0ecf8fce39ca46c87dd
│  │  ├─ bd
│  │  │  └─ 0af76424b1506cc8a408742eb57d002ad381a2
│  │  ├─ be
│  │  │  ├─ 91d92311186aafcf1293b7357c8225ed120afe
│  │  │  ├─ a5abc61df92bd71cd01770351fdd435c1ca9b3
│  │  │  ├─ bde715d8f3e4de4cfefcf24627bd4f48a4d2e0
│  │  │  └─ dcd3d1d96b181dc1ea26fc3ab0ac02bb5674f0
│  │  ├─ c0
│  │  │  ├─ 02c60858a88a9ad197f51b8f847955927c6868
│  │  │  ├─ 90e1df6d52cb6d448728130f10c8921bd8cecf
│  │  │  └─ c79d5834c1c92c7e3b0af01246fc7b1b55537f
│  │  ├─ c1
│  │  │  └─ 0952290f12dbb3054edf586baa9d19c916395e
│  │  ├─ c2
│  │  │  └─ 51db1f74fe62fd5f665015fc30d63c4b65dad5
│  │  ├─ c3
│  │  │  ├─ 01febdd4347b911b90e346be1339c8cce41a16
│  │  │  └─ 6ca8535b613731f8ba7a661a1116d2743ef406
│  │  ├─ c4
│  │  │  ├─ 64704050d7b0d818a5dd134684b101cd36133f
│  │  │  └─ e419cf9ac906493d56fd44837fce2ef3ad5f6e
│  │  ├─ c5
│  │  │  ├─ 7174791ad120f1424f106af5a0dd9b10ca301e
│  │  │  └─ fbac3196592c799e526896299785eeba7e3027
│  │  ├─ c7
│  │  │  └─ 01a35608579802ad58b7f03e275f2d64361b88
│  │  ├─ c8
│  │  │  └─ 147ed1b9691b738e7296189387a94f61f29cb0
│  │  ├─ c9
│  │  │  └─ 202cf3e187785ee6923f61ca7dad6fd3a6c034
│  │  ├─ ca
│  │  │  ├─ 5f7d62946e6e854f8e3a9ab033ba5a5bfb2e20
│  │  │  ├─ 844fcb94e16c8801e97bc342d318da23d51aac
│  │  │  └─ 8baede3a952f70118ce8991615faf5846d0c83
│  │  ├─ cb
│  │  │  └─ 5033575d522d7363dd6ee5c6d649f0b328c540
│  │  ├─ ce
│  │  │  └─ 46cb7d0fa91028b1bf6f33b8d0317a00681552
│  │  ├─ cf
│  │  │  ├─ 15af3400e5ac4e04e74b011e01b9a2480de14a
│  │  │  └─ ed86c51c3505f1a673d7b73d8c836ec9047780
│  │  ├─ d0
│  │  │  ├─ 15e1c97e79a2aeb0137c1f554d15755588b522
│  │  │  └─ c8eb0b71939050cf293034c300179678ae3caf
│  │  ├─ d1
│  │  │  └─ 7ca2af6d86de2137fae5b121b3b0b9bb4be2eb
│  │  ├─ d2
│  │  │  └─ a123bba2b7952caf4a9252054d4535895529be
│  │  ├─ d3
│  │  │  ├─ 648d99eb6ca5782d451ebdf128be17658d470f
│  │  │  └─ efdd81c06a27d80a99ad63fcb0e3b205d8f31a
│  │  ├─ d5
│  │  │  └─ 878e5f4faf9a1877833e701b3cb345016e14cb
│  │  ├─ d9
│  │  │  ├─ 194f2781b768ac85a17a2490e9afc14647bd89
│  │  │  ├─ 556ba2780efb4fdc90ff1327b23e1278ae7464
│  │  │  └─ edc7a8b1cecc7d4e17865d281d1966a7e3791f
│  │  ├─ da
│  │  │  ├─ 1540221caeae1bca0741344681963a6596175e
│  │  │  └─ 5e28a73da3fa5d591c5421398c633a3d83e3d5
│  │  ├─ db
│  │  │  ├─ 0c314a083a1a0c1fc37c8e316971530ad81942
│  │  │  ├─ 3febcd30b9bea22924c668fcc56c75d6d5c712
│  │  │  └─ 469c743c4b4e3b63d72c842191d7d869a20124
│  │  ├─ dd
│  │  │  └─ 1336bd45ca7fae3d01dc4dcce8195b5aa0522b
│  │  ├─ de
│  │  │  └─ 10935bfd61b9c7e77b7e0ef355e13ca15aa246
│  │  ├─ df
│  │  │  └─ 793972712d7aa7ad39c34f19bfed8015eb659a
│  │  ├─ e0
│  │  │  └─ 07f0ff78e6f38043d20ffc6a9b26a71e5d272f
│  │  ├─ e1
│  │  │  └─ 1932e422256d9f0f696f99d2506a354a9a1d06
│  │  ├─ e2
│  │  │  ├─ 7b091f7d3bf5f06b630acd3b179e42a12ecaf8
│  │  │  ├─ 93a50e4777adb355d75c3b24006868be3d3aa4
│  │  │  └─ ab4d6fd2abd15cd89e19d80dda81a6402f949c
│  │  ├─ e3
│  │  │  ├─ 09252c11cdce9b6d63c44405a3d7715b5430cd
│  │  │  └─ d2d78248565d2eeb26785afccafd3cda1c7296
│  │  ├─ e4
│  │  │  ├─ 9b87fc14b07230ab4130ba917e284ae4ff204e
│  │  │  └─ f3e8d839105fc64d35f028f82f49e347afeaf2
│  │  ├─ e5
│  │  │  ├─ 5c583dd095a596ed084669bce5860315ec7919
│  │  │  ├─ 7ff60a52a8f10ecf059086f7519d76fe971b0f
│  │  │  └─ ca3715fe5e386bd9dcd92f11e8e10ba7f15f50
│  │  ├─ e6
│  │  │  ├─ bd431da729ebfb402094ba76ce9a7928bf8396
│  │  │  └─ f7b0abb64618910f2e5894d5bfa06a5994b578
│  │  ├─ e7
│  │  │  ├─ bb91f6ae032af87b794133ce5ba3edb36b733e
│  │  │  └─ bdebdf1c8d536443b4f5497949cb41353cf7ab
│  │  ├─ e9
│  │  │  ├─ 17657dca0f6466301f055f31a0ffd4b108d12f
│  │  │  ├─ 75eeaf80d9702c5fb00270f9f4c5ac62e0ef8c
│  │  │  ├─ 94f02e7bf754e0dcb6d1d9a079531d3fe195c5
│  │  │  └─ d087c276748fe40c52c195176a240045d51b20
│  │  ├─ eb
│  │  │  ├─ 604ce6a5ed1147e08cea43fad8158e9651acb0
│  │  │  ├─ 9ff2dbb8ce5d34e6726ed513d7f591344f7e03
│  │  │  └─ fe59659e38e3ef46ca31d65944365dc4a47c5d
│  │  ├─ ec
│  │  │  └─ 0da2cb85e172c4c4144323794a3629b573ee02
│  │  ├─ ed
│  │  │  └─ 439573192acac60a4195a2661cfadfbdfaacc3
│  │  ├─ ee
│  │  │  └─ 70be479fcf03fc8a0bbbca22219147c293161d
│  │  ├─ f0
│  │  │  └─ 97aecd76a090174e5c3371234043d1ddc5d5fd
│  │  ├─ f1
│  │  │  └─ 22546e78a97683bbf69b1f31e77990649a9e79
│  │  ├─ f3
│  │  │  ├─ b491dd1073edcc0119b318f8f4da7ae4fb3516
│  │  │  └─ ba25ce207f30fc278a1c12fb2c6ea1b1724b67
│  │  ├─ f4
│  │  │  ├─ 51df6818c2c9dbdc08d089d832a58999ed3002
│  │  │  └─ cd9f5f6bfe22328196238fffa50de22f8aae69
│  │  ├─ f5
│  │  │  └─ f158351884cbf00a3dfb6ff3c296277b0e0e20
│  │  ├─ f7
│  │  │  └─ cec7ae62a581aee38e3fd0e90ad1586ebc67e7
│  │  ├─ f8
│  │  │  ├─ 9000592495b3e78e3333ec77b94a0746243d29
│  │  │  └─ e5c45d6370730dc4914b37ded7f07af26a5e4c
│  │  ├─ f9
│  │  │  └─ 15437f0e62506a178b513ac05138019a700d6a
│  │  ├─ fa
│  │  │  └─ 7ceba3eb4a9657a9db7f3ffca4e4e97a9019de
│  │  ├─ fb
│  │  │  └─ fa9e493cd8e0baacfba2a8c4bf66e133ffe38b
│  │  ├─ fc
│  │  │  └─ 0dc93f32b4603ba9e4488df6896c4a48bd547d
│  │  ├─ fd
│  │  │  ├─ 6eefa6d79c417a247cf2abead3d1cd48892aa1
│  │  │  └─ c46b8c61316f1570ef8df960a55898506487b7
│  │  ├─ fe
│  │  │  └─ 59e22a39272b0c157e9c729039ea146f458fe1
│  │  ├─ ff
│  │  │  └─ 05821444848de61158113ad7a87a1d7433ce19
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-722055452693563d4acdcb0c9d36465173cb6fa6.idx
│  │     └─ pack-722055452693563d4acdcb0c9d36465173cb6fa6.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  ├─ cs
│     │  │  └─ main
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ Dockerfile
├─ README.md
├─ app.js
├─ controllers
│  ├─ TaskController.js
│  └─ UserController.js
├─ docker-compose.yml
├─ middleware
│  ├─ authMiddleware.js
│  └─ userMiddleware.js
├─ models
│  ├─ Task.js
│  └─ User.js
├─ package.json
└─ routes
   ├─ authRoutes.js
   ├─ profileRoutes.js
   ├─ protectedRoutes.js
   ├─ tasks.js
   └─ users.js
```
