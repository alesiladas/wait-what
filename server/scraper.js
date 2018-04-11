'use strict';
const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const fs = require('fs');
const path = require('path');

const scraper = {
  getRedditData: (req, res) => {
    console.log('inside getData');

    request('https://www.reddit.com/r/weirdnews/.json', (error, response, data) => {
      if (error) { return console.log('Error in request:', error) }
      else {
        const dataObj = JSON.parse(data);

        for (let child in dataObj.data.children) {
          for (let i = 0; i < dataObj.data.children.length; i++) {
            let child = dataObj.data.children[i];
            console.log(child.data.title);

          }
        }
        response.end();
      }
    });
  },
}

module.exports = scraper;