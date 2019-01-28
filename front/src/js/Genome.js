const PERTUBATION_PROBABILITY = 0.9;

class Genome {
  constructor() {
    this.nodes = {}
    this.connections = {}
  }

  addNode(node) {
    this.nodes.set(node.id,node)
  }

  addConnection(connection) {
    this.connections.set(connection.id,connection)
  }

  mutate() {
    this.connections.forEach((_,c) => {
      if(Math.random() < PERTUBATION_PROBABILITY) c.weight = c.weight * (Math.random()*4-2)
      else c.weight = Math.random()*4-2
    })
  }

  pickRandom(obj) {
    let result
    let count = 0
    for(let prop in obj)
      if(Math.random() < 1/++count)
        result = prop
    return result
  }

  connectionMutation() {
    let i = 0
    let exists = false
    const newWeight = Math.random()*4-2
    let n1 = null
    let n2 = null

    do {
      exists = false
      n1 = pickRandom(this.nodes)
      n2 = pickRandom(this.nodes)



      this.connections.forEach((_,c) => {
        if((c.inNode === n1.id && c.outNode === n2.id) || (c.inNode === n2.id && c.outNode === n1.id))
          exists = true
      })


      i++
    }while(i < 10 && (n1.id === n2.id || n1.type === 'input' && n2.type === 'input' || n1.type === 'output' && n2.type === 'output' || exists)

    if(exists) return
    if(n1.id === n2.id) return
    if(n1.type === 'input' && n2.type === 'input') return
    if(n1.type === 'output' && n2.type === 'output') return

    let reversed = false

    if(n1.type === 'output' || n2.type === 'input') reversed === true

    let newConnection = new ConnectionGene(ID(), reversed ? n2.id : n1.id, reversed ? n1.id : n2.id, newWeight, true)
    addConnection(newConnection)
  }

  nodeMutation() {
    let con = pickRandom(this.connections)
    if(!con.enabled) return

    let inNode = this.nodes[con.inNode]
    let outNode = this.nodes[con.outNode]

    con.disable()

    let newNode = new NodeGene(ID(),'hidden')
    let inCon = new ConnectionGene(ID(),inNode.id,newNode.id,1,true)
    let outCon = new ConnectionGene(ID(),newNode.id,outNode.id,con.weight,true)

    addNode(newNode)
    addConnection(inCon)
    addConnection(outCon)
  }

  crossOver(parent2) {
    let child = new Genome()

    this.nodes.forEach((_,n) => {
      child.addNode(n.copy())
    })

    
  }

  ID() {
    Math.random().toString(36).substr(2,9)
  }
}
