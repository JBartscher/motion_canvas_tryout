import {Circle, Layout, makeScene2D} from '@motion-canvas/2d';
import {all, BeatSpring, createRef, Reference, spring, ThreadGenerator} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    // Create your animations here
    const TCircle = createRef<Circle>();
    const PCircle = createRef<Circle>();
    const MCircle1 = createRef<Circle>();
    const MCircle2 = createRef<Circle>();


    const RCircle1 = createRef<Circle>();
    const RCircle2 = createRef<Circle>();
    const RCircle3 = createRef<Circle>();
    const RCircle4 = createRef<Circle>();
    const RCircle5 = createRef<Circle>();




    const circles = [TCircle, PCircle, MCircle1, MCircle2, RCircle1]


    view.add(
        <Layout>
            <Circle
                ref={TCircle}
                x={0}
                y={0}
                size={100}
                fill={'#ff6470'}
            />
            <Circle
                ref={PCircle}
                x={0}
                y={0}
                size={100}
                fill={'#68abdf'}
            />
            <Circle
                ref={MCircle1}
                x={0}
                y={0}
                size={100}
                fill={'#ffc66d'}
            />
            <Circle
                ref={MCircle2}
                x={0}
                y={0}
                size={100}
                fill={'#ffc66d'}
            />

            <Circle
                ref={RCircle1}
                x={0}
                y={0}
                size={100}
                fill={'#99c47a'}
            />
            <Circle
                ref={RCircle2}
                x={0}
                y={0}
                size={100}
                fill={'#99c47a'}
            />
            <Circle
                ref={RCircle3}
                x={0}
                y={0}
                size={100}
                fill={'#99c47a'}
            />
            <Circle
                ref={RCircle4}
                x={0}
                y={0}
                size={100}
                fill={'#99c47a'}
            />
            <Circle
                ref={RCircle5}
                x={0}
                y={0}
                size={100}
                fill={'#99c47a'}
            />
        </Layout>
    );


    // yield* flicker(myCircle())

    yield* all(
        spring(BeatSpring, 0, -300, 1, value => {
            TCircle().position.x(value);
            TCircle().position.y(value);
        }),
        spring(BeatSpring, 0, -150, 1, value => {
            PCircle().position.x(value);
            PCircle().position.y(value);
        }),
        // measurements
        spring(BeatSpring, 0, -225, 1, value => {
            MCircle1().position.x(value);
            MCircle1().position.y(0);
        }),
        spring(BeatSpring, 0, -75, 1, value => {
            MCircle2().position.x(value);
            MCircle2().position.y(0);
        }),

        // records
        spring(BeatSpring, 0, -350, 1, value => {
            RCircle1().position.x(value);
            RCircle1().position.y(150);
        }),
        spring(BeatSpring, 0, -225, 1, value => {
            RCircle2().position.x(value);
            RCircle2().position.y(150);
        }),
        spring(BeatSpring, 0, -125, 1, value => {
            RCircle3().position.x(value);
            RCircle3().position.y(150);
        }),
        spring(BeatSpring, 0, 50, 1, value => {
            RCircle4().position.x(value);
            RCircle4().position.y(150);
        }),
        spring(BeatSpring, 0, 50, 1, value => {
            RCircle5().position.x(value);
            RCircle5().position.y(150);
        }),
    )

    yield* all(
        MCircle1().ripple(1),
        MCircle2().ripple(1),

        RCircle1().ripple(1),
        RCircle2().ripple(1),
        RCircle3().ripple(1),
        RCircle4().ripple(1),
        RCircle5().ripple(1),

        PCircle().ripple(1),
        TCircle().ripple(1),
        // @ts-ignore
        // circles.forEach(c => c().ripple(1))
    )

    // yield* tween(2, value => {
    //     MCircle().position(
    //         Vector2.arcLerp(
    //             new Vector2(-300, 200),
    //             new Vector2(300, -200),
    //             easeInOutCubic(value),
    //         ),
    //     );
    // });
    //
    // yield* spring(BeatSpring, 300, -300, 1, value => {
    //     MCircle().position.x(value);
    //     MCircle().position.y(-value);
    // });

});

function* flicker(circle: Circle): ThreadGenerator {
    circle.fill('red');
    yield;
    circle.fill('blue');
    yield;
    circle.fill('red');
    yield;
}

function* moveAndSlide(circles: Reference<Circle>[]): ThreadGenerator {
    // T-Circle
    circles[0]().position.x(0, 1).to(-400, 1)
    circles[0]().position.y(0, 1).to(-400, 1)
    // P-Circle
    circles[1]().position.x(0, 1).to(-200, 1)
    circles[1]().position.y(0, 1).to(-150, 1)
    // M-Circle
    circles[2]().position.x(0, 1).to(-200, 1)
    circles[2]().position.y(0, 1).to(0, 1)
    // R-Circle
    circles[3]().position.x(0, 1).to(50, 1)
    circles[3]().position.y(0, 1).to(50, 1)
}