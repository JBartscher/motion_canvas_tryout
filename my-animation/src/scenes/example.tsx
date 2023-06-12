import {Circle, CubicBezier, Icon, Txt, Layout, Line, makeScene2D} from '@motion-canvas/2d';
import {all, BeatSpring, createRef, makeRef, Reference, spring, ThreadGenerator, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const TCircle = createRef<Circle>();
    const PCircle = createRef<Circle>();
    const MCircle1 = createRef<Circle>();
    const MCircle2 = createRef<Circle>();


    const RCircle1 = createRef<Circle>();
    const RCircle2 = createRef<Circle>();
    const RCircle3 = createRef<Circle>();
    const RCircle4 = createRef<Circle>();
    const RCircle5 = createRef<Circle>();

    const circles: Circle[] = [TCircle(), PCircle(), MCircle1(), MCircle2(), RCircle1(), RCircle2(), RCircle3(), RCircle4(), RCircle5()];

    view.add(
        <Layout>
            <Circle
                ref={TCircle}
                x={0}
                y={0}
                size={100}
                fill={'#ff6470'}
            ></Circle>
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
        spring(BeatSpring, 0, -375, 1, value => {
            RCircle1().position.x(value);
            RCircle1().position.y(0);
        }),
        spring(BeatSpring, 0, -275, 1, value => {
            RCircle2().position.x(value);
            RCircle2().position.y(150);
        }),
        spring(BeatSpring, 0, -150, 1, value => {
            RCircle3().position.x(value);
            RCircle3().position.y(300);
        }),
        spring(BeatSpring, 0, -25, 1, value => {
            RCircle4().position.x(value);
            RCircle4().position.y(150);
        }),
        spring(BeatSpring, 0, 75, 1, value => {
            RCircle5().position.x(value);
            RCircle5().position.y(0);
        }),
    )

    const lines: Line[] = [];

    view.add(
        <>
            {/*t -> p*/}
            <Line lineWidth={10} ref={makeRef(lines, 0)} stroke={"#333"} startOffset={20} endOffset={20} radius={80}
                  end={0}
                  opacity={0}
                  points={[
                      TCircle().right,
                      () => TCircle().right().addX(80),
                      () => PCircle().left().addX(-80),
                      PCircle().left,
                  ]}></Line>
            {/*p -> m*/}
            <Line lineWidth={10} ref={makeRef(lines, 1)} stroke={"#333"} startOffset={20} endOffset={20} radius={800}
                  end={0}
                  opacity={0}
                  points={[
                      PCircle().bottom,
                      () => MCircle1().top().addX(40),
                      MCircle1().topRight,
                  ]}></Line>
            <Line lineWidth={10} ref={makeRef(lines, 2)} stroke={"#333"} startOffset={20} endOffset={20} radius={800}
                  end={0}
                  opacity={0}
                  points={[
                      PCircle().bottom,
                      () => MCircle2().top().addX(-40),
                      MCircle2().topLeft,
                  ]}></Line>
            {/*m1 -> r1,r2*/}
            <Line lineWidth={10} ref={makeRef(lines, 3)} stroke={"#333"} startOffset={20} endOffset={20} radius={800}
                  end={0}
                  opacity={0}
                  points={[
                      MCircle1().left,
                      RCircle1().right,
                  ]}></Line>
            <Line lineWidth={10} ref={makeRef(lines, 4)} stroke={"#333"} startOffset={20} endOffset={20} radius={800}
                  end={0} opacity={0} points={[
                MCircle1().bottom,
                () => MCircle1().bottom().addX(40),
                () => RCircle2().right().addX(40),
                RCircle2().right,
            ]}></Line>

            {/*m2 -> r3,r4,r5*/}
            <Line lineWidth={10} ref={makeRef(lines, 5)} stroke={"#333"} startOffset={20} endOffset={20} radius={1000}
                  end={0}
                  opacity={0}
                  points={[
                      MCircle2().left,
                      () => MCircle2().left().addX(-80),
                      () => RCircle3().top().addX(80),
                      RCircle3().top,
                  ]}></Line>
            <Line lineWidth={10} ref={makeRef(lines, 6)} stroke={"#333"} startOffset={20} endOffset={20} radius={800}
                  end={0}
                  opacity={0}
                  points={[
                      MCircle2().bottom,
                      () => MCircle2().bottom().addX(-40),
                      () => RCircle4().left().addX(-40),
                      RCircle4().left,
                  ]}></Line>
            <Line lineWidth={10} ref={makeRef(lines, 7)} stroke={"#333"} startOffset={20} endOffset={20} radius={800}
                  end={0}
                  points={[
                      MCircle2().right,
                      RCircle5().left,
                  ]}></Line>
        </>
    )

    // Animate them
    yield* all(
        ...lines.map(line => line.end(1, 1),),
        // removes flickering when entering the scene
        ...lines.map(line => line.opacity(1, 1)),
    );

    yield* waitFor(0.5);

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
