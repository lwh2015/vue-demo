import { createAPI } from '../util';
import config from '../config';

const baseUrl = {
  mock: 'http://xydev.cn:7300/mock/5c22ec236338b800170010c4/duty',
  dev: '',
  pre: '',
  prod: ''
}[config.env || 'mock'];

export default createAPI(baseUrl);
