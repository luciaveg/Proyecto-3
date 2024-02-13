import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar el botón cuando el usuario haya desplazado hacia abajo 400px
    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Agregar un listener para controlar el desplazamiento
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Desplazar hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible &&
                <button className="scroll-to-top-btn" onClick={scrollToTop}>
                    Ir Arriba
                </button>
            }
        </div>
    );
}

export default ScrollToTopButton;