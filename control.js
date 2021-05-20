//Terrain Rotation
AFRAME.registerComponent("road-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z,
      });
    },
  });
  
  //Plane rotation component
  AFRAME.registerComponent("car-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var carRotation = this.data.speedOfRotation;
        var carPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (carRotation.x < 10) {
            carRotation.x += 0.5;
            this.el.setAttribute("rotation", carRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (carRotation.x > -10) {
            carRotation.x -= 0.5;
            this.el.setAttribute("rotation", carRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (carRotation.z < 20) {
            carRotation.z += 0.5;
            this.el.setAttribute("rotation", carRotation);
          }
       
        }
        if (e.key === "ArrowDown") {
          if (carRotation.z > -10) {
            carRotation.z -= 0.5;
            this.el.setAttribute("rotation", carRotation);
          }
    
        }
      });
    },
  });
  