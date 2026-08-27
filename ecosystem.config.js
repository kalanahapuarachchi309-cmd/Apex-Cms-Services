module.exports = {
  apps : [
      {
          name   : "customer-service",
          script: "java",
          args : "-jar customer-service/target/customer-service-0.0.1-SNAPSHOT.jar",
          logs : "./logs/customer-service.log",
          instances : 2
      },
    {
        name   : "order-service",
        script: "java",
        args : "-jar order-service/target/order-service-0.0.1-SNAPSHOT.jar",
        logs : "./logs/order-service.log",
        instances : 2
    },
    {
        name   : "vehicle-service",
        script: "java",
        args : "-jar vehicle-service/target/vehicle-service-0.0.1-SNAPSHOT.jar",
        logs : "./logs/vehicle-service.log",
        instances : 2
    }
  ]
}
