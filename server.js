const express = require('express')


let app = express()

let app2 = express()

let accounts=[{id:1,name:'Alex',deposit:5},{id:2,name:'Sarah',deposit:5},{id:3,name:'Jim',deposit:15}]

let data= accounts.find(({name})=> name.toLowerCase()==='sarah')

app.get('/array',function(request,response){
response.json(data)
})

app2.get('/linkedlist',function(request,response){
    response.json(data2)
    })

class linkedList {
    constructor(){
        this.head = this.tail = null
    }

    append(value) {
        if(!this.tail) {
            this.head = this.tail = new Node(value)
        }else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }


    }

    search(value) {
        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode.value
            }
            currentNode = currentNode.next
        }

        return null

    }


}

class Node {
    constructor(value, prev, next){
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

let list = new linkedList()
let acc1 = {id:1,name:'Alex',deposit:5}
list.append(acc1)
let data2= list.search(acc1)
console.log(list)
console.log(data)
console.log(data2)
//start the server on port 3000
app.listen(3000)
app2.listen(3001)