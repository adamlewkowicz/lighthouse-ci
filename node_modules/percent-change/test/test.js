'use strict'

const change = require('../')
const test = require('tap').test

test('from and to', function(t) {
  t.plan(2)
  const from = 50000
  const to = 70000
  const c = change(from, to, true)
  t.equal(c, '40.00%')
  const c2 = change(from, to, false)
  t.equal(c2, 0.4)
})

test('0 places', function(t) {
  t.plan(2)
  const from = 5
  const to = 7
  const c = change(from, to, 0, true)
  t.equal(c, '40%')
  const c2 = change(from, to, 0, false)
  t.equal(c2, 0.4)
})

test('2 places', function(t) {
  t.plan(2)
  const from = 5
  const to = 7
  const c = change(from, to, 2, true)
  t.equal(c, '40.00%')
  const c2 = change(from, to, 2, false)
  t.equal(c2, 0.4)
})

test('not numbers', function(t) {
  t.plan(2)
  t.equal(change('this', 5), 0)
  t.equal(change(5, 'this'), 0)
})

test('from is 0 and to is not 0', function(t) {
  t.plan(1)
  t.equal(change(0, 100), Infinity)
})

test('from and to are both 0', function(t) {
  t.plan(2)
  t.equal(change(0, 0), 0)
  t.equal(change(0, 0, true), '0.00%')
})

test('format', function(t) {
  t.plan(1)
  t.equal(change.format(0, 0), '0.00%')
})
