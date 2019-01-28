class Gene {
  constructor(id){
    this.id = id
  }
}

class ConnectionGene extends Gene {
  constructor(id,inNode,outNode,weight,enabled) {
    super(id)
    this.inNode = inNode
    this.outNode = outNode
    this.weight = weight
    this.enabled = enabled
  }

  disable() {
    this.enabled = false
  }

  copy() {
    return new ConnectionGene(this.id,this.inNode,this.outNode,this.weight,this.enabled)
  }
}

class NodeGene extends Gene {
  constructor(id,type) {
    super(id)
    this.type = type
  }

  copy() {
    return new NodeGene(this.id,this.type)
  }
}

enum Type {
  INPUT,OUTPUT,HIDDEN
}
