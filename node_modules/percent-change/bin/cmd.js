#!/usr/bin/env node

'use strict'

const nopt = require('nopt')
    , knownOpts = { help: Boolean
                  , version: Boolean
                  , places: Number
                  , format: Boolean
                  }
    , shortHand = { h: ['--help']
                  , v: ['--version']
                  , p: ['--places']
                  , f: ['--format']
                  }
    , parsed = nopt(knownOpts, shortHand)
    , usage = require('help')()
    , change = require('../')

if (parsed.help) {
  return usage(0)
}

if (parsed.version) {
  console.log('percent-change', 'v'+require('../package').version)
  return
}

const places = parsed.hasOwnProperty('places')
  ? parsed.places
  : 2

const args = parsed.argv.remain

if (args.length < 2) {
  return usage(1)
}

const from = args.shift()
const to = args.shift()

console.log(change(from, to, places, parsed.format))
