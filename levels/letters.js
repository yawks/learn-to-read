class Letters {
  constructor() {
    this.currentLetter = "";
    createLevelElementWithId("svg", "svg");
    this.svg = selectSVG("svg");
    this.text = createLevelElementWithId("p", "text", "text");
    this.input = createLevelElementWithId("input", "input", "input");
    this.input2 = createLevelElementWithId("input", "input2", "input"); // to clear virtual keyboard suggestion
    this.offscreenText = createLevelElementWithId("p", "offscreen-text", "offscreen-text");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.textSize = 0;
    this.textCenter = 0;
    this.letters = [];
    this.lastUtteranceIsFinished = true;

    window.addEventListener("resize", this.resizePage);
    this.input.addEventListener("keyup", this.inputKeyup);
  }

  getAlphabet = () => {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  resizePage = () => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.svg.set("height", this.height);
    this.svg.set("width", this.width);
    this.svg.set("viewBox", `0 0 ${this.width} ${this.height}`);
    this.resizeLetters();
  };

  resizeLetters = () => {
    this.textSize = Math.min(180, this.width / (this.letters.length + 2));
    //i f (textSize > 180)this.textSize = 150;
    this.text.style.fontSize = `${this.textSize}px`;
    this.text.style.height = `${this.textSize}px`;
    this.text.style.lineHeight = `${this.textSize}px`;
    this.offscreenText.style.fontSize = `${this.textSize}px`;
    const textRect = this.text.getBoundingClientRect();
    this.textCenter = textRect.top + textRect.height / 2;
    this.positionLetters();
  };

  positionLetters = () => {
    this.letters.forEach((letter) => {
      const timing = letter.shift ? 0.1 : 0;
      TweenLite.to(letter.onScreen, timing, {
        x: letter.offScreen.offsetLeft + "px",
        ease: Power3.easeInOut,
      });
      letter.shift = true;
    });
  };

  animateLetterIn = (letter) => {
    const yOffset = (0.5 + Math.random() * 0.5) * this.textSize;
    TweenLite.fromTo(
      letter,
      0.4,
      { scale: 0 },
      { scale: 1, ease: Back.easeOut }
    );
    TweenLite.fromTo(
      letter,
      0.4,
      { opacity: 0 },
      { opacity: 1, ease: Power3.easeOut }
    );
    TweenLite.to(letter, 0.2, { y: -yOffset, ease: Power3.easeInOut });
    TweenLite.to(letter, 0.2, { y: 0, ease: Power3.easeInOut, delay: 0.2 });
    const rotation = -50 + Math.random() * 100;
    TweenLite.to(letter, 0.2, { rotation: rotation, ease: Power3.easeInOut });
    TweenLite.to(letter, 0.2, {
      rotation: 0,
      ease: Power3.easeInOut,
      delay: 0.2,
    });
  };

  addDecor = (letter, color) => {
    setTimeout(() => {
      //var rect = letter.getBoundingClientRect();
      const x0 = letter.offsetLeft + letter.offsetWidth / 2;
      const y0 = this.textCenter -this.textSize * 0.5;
      const shade = color.shades[Math.floor(Math.random() * 4)];
      for (var i = 0; i < 8; i++) this.addTri(x0, y0, shade);
      for (var i = 0; i < 8; i++) this.addCirc(x0, y0);
    }, 150);
  };

  addTri = (x0, y0, shade) => {
    const tri = createSVG("polygon");
    const a = Math.random();
    const a2 = a + (-0.2 + Math.random() * 0.4);
    const r = this.textSize * 0.52;
    const r2 = r + this.textSize * Math.random() * 0.2;
    const x = x0 + r * Math.cos(2 * Math.PI * a);
    const y = y0 + r * Math.sin(2 * Math.PI * a);
    const x2 = x0 + r2 * Math.cos(2 * Math.PI * a2);
    const y2 = y0 + r2 * Math.sin(2 * Math.PI * a2);
    const triSize = this.textSize * 0.1;
    const scale = 0.3 + Math.random() * 0.7;
    const offset = triSize * scale;
    tri.set("points", `0,0 ${triSize * 2},0 ${triSize},${triSize * 2}`);
    tri.style("fill", shade);
    this.svg.element.appendChild(tri.element);
    TweenLite.fromTo(
      tri.element,
      0.6,
      {
        rotation: Math.random() * 360,
        scale: scale,
        x: x - offset,
        y: y - offset,
        opacity: 1,
      },
      {
        x: x2 - offset,
        y: y2 - offset,
        opacity: 0,
        ease: Power1.easeInOut,
        onComplete: () => {
          this.svg.element.removeChild(tri.element);
        },
      }
    );
  };

  addCirc = (x0, y0) => {
    const circ = createSVG("circle");
    const a = Math.random();
    const r = this.textSize * 0.52;
    const r2 = r + this.textSize;
    const x = x0 + r * Math.cos(2 * Math.PI * a);
    const y = y0 + r * Math.sin(2 * Math.PI * a);
    const x2 = x0 + r2 * Math.cos(2 * Math.PI * a);
    const y2 = y0 + r2 * Math.sin(2 * Math.PI * a);
    const circSize = this.textSize * 0.05 * Math.random();
    circ.set("r", circSize);
    circ.style("fill", "#eee");
    this.svg.element.appendChild(circ.element);
    TweenLite.fromTo(
      circ.element,
      0.6,
      { x: x - circSize, y: y - circSize, opacity: 1 },
      {
        x: x2 - circSize,
        y: y2 - circSize,
        opacity: 0,
        ease: Power1.easeInOut,
        onComplete: () => {
          this.svg.element.removeChild(circ.element);
        },
      }
    );
  };

  getLetterClassName = () => {
    return "upper";
  };

  addLetter = (char, i) => {
    const letter = document.createElement("span");
    letter.classList.add("letter");
    letter.classList.add(this.getLetterClassName());
    const oLetter = document.createElement("span");
    letter.innerHTML = char;
    oLetter.innerHTML = char;
    text.appendChild(letter);
    const idx = Math.floor(Math.random() * colors.length);
    const color = colors[idx];
    document.querySelectorAll(".bg").forEach((el) => {
      el.style.backgroundImage =
        "linear-gradient(-60deg, " +
        colors[(idx + 1) % colors.length].shades[0] +
        " 50%, " +
        colors[(idx + 1) % colors.length].shades[3] +
        " 50%)";
    });

    letter.style.color = color.main;
    this.offscreenText.appendChild(oLetter);
    this.letters[i] = { offScreen: oLetter, onScreen: letter, char: char };
    this.animateLetterIn(letter);
    this.addDecor(oLetter, color);
  };

  addLetters = (value) => {
    value.forEach((char, i) => {
      if (this.letters[i] && letters[i].char !== char) {
        this.letters[i].onScreen.innerHTML = char;
        this.letters[i].offScreen.innerHTML = char;
        this.letters[i].char = char;
      }
      if (this.letters[i] === undefined) {
        this.addLetter(char, i);
      }
    });
  };

  animateLetterOut = (letter, i) => {
    TweenLite.to(letter.onScreen, 0.1, {
      scale: 0,
      opacity: 0,
      ease: Power2.easeIn,
      onComplete: () => {
        this.offscreenText.removeChild(letter.offScreen);
        this.text.removeChild(letter.onScreen);
        this.positionLetters();
      },
    });
    this.letters.splice(i, 1);
  };

  removeLetters = (value) => {
    for (let i = this.letters.length - 1; i >= 0; i--) {
      const letter = this.letters[i];
      if (value[i] === undefined) {
        this.animateLetterOut(letter, i);
      }
    }
  };

  inputKeyup = (e) => {
    if (this.lastUtteranceIsFinished) {
      let inp = String.fromCharCode(e.keyCode); //input.value.toUpperCase();
      this.input2.focus();
      this.input.focus();
      if (inp.toLowerCase() == this.currentLetter.toLowerCase()) {
        const ut = new SpeechSynthesisUtterance(
          lang.congratulations[
            Math.floor(Math.random() * lang.congratulations.length)
          ]
        );
        ut.lang = lang.lang;
        speechSynthesis.speak(ut);
        this.displayRandomLetter();
      } else if (/[a-zA-Z]/.test(inp)) {
        document.querySelectorAll(".text span").forEach((el) => {
          el.style.animation = "effect 0.5s linear infinite";
        });
        TweenMax.to(this.letters[0].onScreen, 0.01, {
          x: "+=20",
          yoyo: true,
          repeat: 35,
        });
        TweenMax.to(this.letters[0].onScreen, 0.01, {
          x: "-=20",
          yoyo: true,
          repeat: 35,
        });
        setTimeout(function () {
          document.querySelectorAll(".text span").forEach((el) => {
            el.style.animation = "";
          });
        }, 500);

        const ut = new SpeechSynthesisUtterance(
          lang.mistake +
            (inp.toLowerCase() == "y" ? "i grec" : inp) +
            "'"
        );
        ut.lang = lang.lang;
        this.lastUtteranceIsFinished = false;
        speechSynthesis.speak(ut);
        ut.addEventListener("end", (event) => {
          this.lastUtteranceIsFinished = true;
        });
      }
    }

    this.input.value = "";
  };

  displayRandomLetter = () => {
    let value;
    if (this.currentLetter != "") {
      this.currentLetter = "";
      value = [];
      this.addLetters(value);
      this.removeLetters(value);
      this.resizeLetters();
      setTimeout(this.displayRandomLetter, 500);
    } else {
      this.currentLetter =
        this.getAlphabet()[Math.floor(Math.random() * this.getAlphabet().length)];
      value = this.currentLetter.split("");
      this.addLetters(value);
      this.removeLetters(value);
      this.resizeLetters();

      const ut = new SpeechSynthesisUtterance(
        lang.find_character +
          (this.currentLetter == "Y" ? "i grec" : this.currentLetter) +
          "."
      );
      ut.lang = lang.lang;
      speechSynthesis.speak(ut);
    }
  }

}

class LettersLevel1 extends Letters {
  start = () => {
    setBackground(Backgrounds.LinearGradient);
    this.resizePage();
    this.displayRandomLetter();
    this.input.focus();
  }
}

class LettersLevel2 extends Letters {
  getAlphabet = () => {
    return "abcdefghijklmnopqrstuvwxyz";
  }

  getLetterClassName = () => {
    return "lower";
  }

  start = () => {
    setBackground(Backgrounds.GradientAnimation);
    this.resizePage();
    this.displayRandomLetter();
    this.input.focus();
  }

}

class LettersLevel3 extends Letters {
 
  start = () => {
    setBackground(Backgrounds.Waves);
    this.resizePage();
    this.displayRandomLetter();
    this.input.focus();
  }

  addLetter = (char, i) => {
  }

}

