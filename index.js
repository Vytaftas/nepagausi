window.addEventListener('DOMContentLoaded', () => {
    let isMobile = window.matchMedia('(any-pointer:coarse)').matches;
    const container = document.querySelector('.container');
    const mobileContainer = `<div class="mob"><span>Veikia tik desktope!</span></div>`;

    window.addEventListener('resize', () => {
        isMobile = window.matchMedia('(any-pointer:coarse)').matches;

        if (isMobile) {
            container.innerHTML = mobileContainer;
        }
    });

    if (!isMobile) {
        container.innerHTML = `<button class="nepagausi">SPAUSK ČIA IR GAUK €100 !</button>`;
        const button = container.querySelector('.nepagausi');

        const phrases = [
            'Tai nereikia pinigų?',
            'Ojej koks turtingas, net €100 nereikia..',
            'Ko nespaudi?',
            'Taigi paspausk ir viskas..',
            'SPAUSK PASAKIAU!',
            'Nespausi?',
            'Paspausk gi..',
            'Negi taip sunku paspausti..',
            'SPAAAAAAUSK',
            'Gerai gerai nespausk, kas nors kitas paspaus..',
            'special',
        ];

        button.addEventListener('click', () => {
            container.style.backgroundColor = 'red';
        });

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const containerCoords = {
                height: container.getBoundingClientRect().height,
                width: container.getBoundingClientRect().width,
            };
            const nepagausi = {
                top: button.getBoundingClientRect().top,
                right: button.getBoundingClientRect().right,
                bottom: button.getBoundingClientRect().bottom,
                left: button.getBoundingClientRect().left,
                width: button.getBoundingClientRect().width,
                height: button.getBoundingClientRect().height,
            };

            if (nepagausi.bottom + 10 >= mouseY && nepagausi.right + 10 >= mouseX && nepagausi.left - 10 <= mouseX && nepagausi.top - 10 <= mouseY) {
                const randomNumber = Math.floor(Math.random() * phrases.length);
                const randomPhrase = phrases[randomNumber];

                if (randomPhrase === 'special') {
                    button.classList.add('special');
                    const randomNumbers = [500, 1500, 2500, 5000];
                    const randomNum = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
                    button.innerHTML = `YPATINGAS PASIŪLYMAS:<br /> SPAUSK IR GAUK €${randomNum}`;
                } else {
                    button.classList.remove('special');
                    button.innerText = randomPhrase;
                }

                let randomTop = Math.random() * containerCoords.height - nepagausi.height;
                if (randomTop < 0) {
                    randomTop = 0;
                }

                let randomLeft = Math.random() * containerCoords.width - nepagausi.width;
                if (randomLeft < 0) {
                    randomLeft = 0;
                }

                button.style.top = `${randomTop}px`;
                button.style.left = `${randomLeft}px`;
                button.style.transform = 'initial';
            }
        });
    } else {
        container.innerHTML = mobileContainer;
    }
});
