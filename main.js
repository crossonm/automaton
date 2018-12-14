const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];




  function buildGraph(edges) {
    let graph = Object.create(null); //creates an empty object called graph
    function addEdge(from, to) { //creates a function called addEdge which takes a from and to arg
      if (graph[from] == null) { //if property indexed at [from] is null then...
        graph[from] = [to];      // let it be equal to the property indexed at [to]
      } else {                   // otherwise 
        graph[from].push(to);    //
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    //return graph;
    console.log(graph);
  }
  
  const roadGraph = buildGraph(roads);
