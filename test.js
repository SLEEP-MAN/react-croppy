import { serial as test } from 'ava';
import React from 'react';
import render from 'react-test-renderer';
import browserEnv from 'browser-env';
import { CroppedImage } from './index.jsx';

browserEnv();

const snapshotJSX = (t, jsx) => {
    t.snapshot(render.create(jsx).toJSON());
};

test('<Image>', (t) => {
    snapshotJSX(t, <CroppedImage alt="Great description" src="https://upload.wikimedia.org/wikipedia/commons/d/da/Internet2.jpg" />);
    t.true(true);
});
