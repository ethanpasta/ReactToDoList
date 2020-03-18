import React, { useEffect, useRef, useState } from 'react';
import Snap from 'snapsvg-cjs';

const SVGIcons = ({ isClicked, isDenied, isEmpty }) => {
    const s = useRef();
    let transform = useRef({});
    useEffect(() => {
        const sv = Snap(s.current);
        const goo = sv.filter('\
        <feGaussianBlur in="SourceGraphic" stdDeviation="13" result="blur" />\
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />\
        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>');
        const plus = Snap.select("#plus")
        const check = Snap.select("#check");
        const deny = Snap.select("#deny");

        transform.current = {
            plusPath: plus.node.getAttribute('d'),
            checkPath: check.node.getAttribute('d'),
            denyPath: deny.node.getAttribute('d'),
            icon: plus,
            goo,
            wasClicked: false
        }
    }, []);
    useEffect(() => {
        const t = transform.current;
        // If input is empty, transform to plus
        if (isEmpty) {
            t.icon.animate({ d: t.plusPath }, 300, mina.backout, () => t.icon.attr({ filter: null }));
            return;
        }
        t.icon.attr({ filter: t.goo });
        if (!isDenied && !isClicked && !t.wasClicked) {
            // Transform to plus from denied
            t.wasClicked = false;
            t.icon.animate({ d: t.plusPath }, 300, mina.backout, () => t.icon.attr({ filter: null }));
        } else if (isDenied) {
            // Transform to deny from plus
            t.wasClicked = false;
            t.icon.animate({ d: t.denyPath }, 300, mina.backout, () => t.icon.attr({ filter: null }));
        } else if (isClicked) {
            // Transform to check and back to plus after submit
            t.wasClicked = true;
            t.icon.animate({ d: t.checkPath }, 300, mina.backout, () => {
                t.icon.animate({ d: t.plusPath }, 300, mina.backin, () => {
                    t.icon.attr({ filter: null });
                });
            });
        }
    }, [isClicked, isDenied]);
    return (
        <svg
            ref={s}
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path fill="currentColor" id="deny" opacity="0" fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            <path id="plus" fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            <path id="check" opacity="0" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
        </svg >
    );
};

export default SVGIcons;