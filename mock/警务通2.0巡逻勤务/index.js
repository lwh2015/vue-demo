import instance from './instance';
import { convertRESTAPI } from '../util';

/** 批量上传轨迹的点位信息 */
function jwt_api_duty_trackInfos_post(opts) {
  return instance({
    method: 'post',
    url:  '/jwt/api/duty/trackInfos',
    opts: opts
  });
}

/** 恢复卡点 */
function jwt_api_duty_points_id_put(opts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/jwt/api/duty/points/{id}', opts),
    opts: opts
  });
}

/** 删除卡点 */
function jwt_api_duty_points_id_delete(opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/jwt/api/duty/points/{id}', opts),
    opts: opts
  });
}

/** 更新签到点 */
function jwt_api_duty_signboxs_put(opts) {
  return instance({
    method: 'put',
    url:  '/jwt/api/duty/signboxs',
    opts: opts
  });
}

/** （App和web端通用）根据所属单位查看签到点列表 */
function jwt_api_duty_signboxs_search_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/signboxs/search/list',
    opts: opts
  });
}

/** （App和web端通用）根据所属单位/签到点级别/签到点类型/选段名称/排班规则分页查看签到点 */
function jwt_api_duty_signboxs_search_page_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/signboxs/search/page',
    opts: opts
  });
}

/** 根据id查看签到点详情 */
function jwt_api_duty_signboxs_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/jwt/api/duty/signboxs/{id}', opts),
    opts: opts
  });
}

/** 删除签到点 */
function jwt_api_duty_signboxs_id_delete(opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/jwt/api/duty/signboxs/{id}', opts),
    opts: opts
  });
}

/** 删除巡段 */
function jwt_api_duty_patrolSections_id_delete(opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/jwt/api/duty/patrolSections/{id}', opts),
    opts: opts
  });
}

/** 巡段新建签到点 */
function jwt_api_duty_patrolSections_id_signboxs_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/jwt/api/duty/patrolSections/{id}/signboxs', opts),
    opts: opts
  });
}

/** 新建卡点 */
function jwt_api_duty_points_post(opts) {
  return instance({
    method: 'post',
    url:  '/jwt/api/duty/points',
    opts: opts
  });
}

/** 更新卡点 */
function jwt_api_duty_points_put(opts) {
  return instance({
    method: 'put',
    url:  '/jwt/api/duty/points',
    opts: opts
  });
}

/** 根据 所属单位/岗亭类别/排班规则/街道/统一编号关键字 分页查看卡点 */
function jwt_api_duty_points_search_page_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/points/search/page',
    opts: opts
  });
}

/** 推送所有卡点信息至ES */
function jwt_api_duty_points_to_es_put(opts) {
  return instance({
    method: 'put',
    url:  '/jwt/api/duty/points/to-es',
    opts: opts
  });
}

/** 根据id查看卡点 */
function jwt_api_duty_points_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/jwt/api/duty/points/{id}', opts),
    opts: opts
  });
}

/** 查询指定时间区间内各单位巡逻人数统计 */
function jwt_api_duty_patrol_statistics_page_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/patrol/statistics/page',
    opts: opts
  });
}

/** 根据id查看巡逻详情 */
function jwt_api_duty_patrol_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/jwt/api/duty/patrol/{id}', opts),
    opts: opts
  });
}

/** 新建巡段 */
function jwt_api_duty_patrolSections_post(opts) {
  return instance({
    method: 'post',
    url:  '/jwt/api/duty/patrolSections',
    opts: opts
  });
}

/** 更新巡段 */
function jwt_api_duty_patrolSections_put(opts) {
  return instance({
    method: 'put',
    url:  '/jwt/api/duty/patrolSections',
    opts: opts
  });
}

/** 查看我的巡段列表 */
function jwt_api_duty_patrolSections_search_byUserId_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/patrolSections/search/byUserId',
    opts: opts
  });
}

/** 根据所属单位/巡段级别/巡段类型/寻段名称关键字/排班规则关键字分页查看巡段 */
function jwt_api_duty_patrolSections_search_page_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/patrolSections/search/page',
    opts: opts
  });
}

/** 根据id查看巡段 */
function jwt_api_duty_patrolSections_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/jwt/api/duty/patrolSections/{id}', opts),
    opts: opts
  });
}

/** 根据所属单位/排班规则关键字/排班类型分页查看排班规则 */
function jwt_api_duty_flightRules_search_page_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/flightRules/search/page',
    opts: opts
  });
}

/** 根据id查看排班规则 */
function jwt_api_duty_flightRules_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/jwt/api/duty/flightRules/{id}', opts),
    opts: opts
  });
}

/** 删除排班规则 */
function jwt_api_duty_flightRules_id_delete(opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/jwt/api/duty/flightRules/{id}', opts),
    opts: opts
  });
}

/** 新建巡逻,开始性质的操作请使用这个接口,例:开始巡逻,签到(无结束操作),开始报备 */
function jwt_api_duty_patrol_post(opts) {
  return instance({
    method: 'post',
    url:  '/jwt/api/duty/patrol',
    opts: opts
  });
}

/** 更新巡逻,结束性质的操作请使用这个接口,例:结束巡逻,结束报备 */
function jwt_api_duty_patrol_put(opts) {
  return instance({
    method: 'put',
    url:  '/jwt/api/duty/patrol',
    opts: opts
  });
}

/** 查看我的巡逻记录列表 */
function jwt_api_duty_patrol_search_byUserId_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/patrol/search/byUserId',
    opts: opts
  });
}

/** （App和web端通用）根据所属单位/巡段级别/巡段类型/选段名称/排班规则分页查看巡逻 */
function jwt_api_duty_patrol_search_page_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/patrol/search/page',
    opts: opts
  });
}

/** 查看排班勤务列表 */
function jwt_api_duty_dutyFlight_search_page_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/dutyFlight/search/page',
    opts: opts
  });
}

/** 查看排班勤务详情 */
function jwt_api_duty_dutyFlight_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/jwt/api/duty/dutyFlight/{id}', opts),
    opts: opts
  });
}

/** 删除排班勤务详情 */
function jwt_api_duty_dutyFlight_id_delete(opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/jwt/api/duty/dutyFlight/{id}', opts),
    opts: opts
  });
}

/** 上传图片 */
function jwt_api_duty_files_post(opts) {
  return instance({
    method: 'post',
    url:  '/jwt/api/duty/files',
    opts: opts
  });
}

/** 新建排班规则 */
function jwt_api_duty_flightRules_post(opts) {
  return instance({
    method: 'post',
    url:  '/jwt/api/duty/flightRules',
    opts: opts
  });
}

/** 更新排班规则 */
function jwt_api_duty_flightRules_put(opts) {
  return instance({
    method: 'put',
    url:  '/jwt/api/duty/flightRules',
    opts: opts
  });
}

/** 查看此人权限范围内的排班规则列表 */
function jwt_api_duty_flightRules_search_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/flightRules/search/list',
    opts: opts
  });
}

/** 新建排班勤务 */
function jwt_api_duty_dutyFlight_post(opts) {
  return instance({
    method: 'post',
    url:  '/jwt/api/duty/dutyFlight',
    opts: opts
  });
}

/** 修改排班勤务 */
function jwt_api_duty_dutyFlight_put(opts) {
  return instance({
    method: 'put',
    url:  '/jwt/api/duty/dutyFlight',
    opts: opts
  });
}

/** 查看字典列表（树状） */
function jwt_api_duty_dictionaryTrees_get(opts) {
  return instance({
    method: 'get',
    url:  '/jwt/api/duty/dictionaryTrees',
    opts: opts
  });
}

export {
  jwt_api_duty_trackInfos_post,
  jwt_api_duty_points_id_put,
  jwt_api_duty_points_id_delete,
  jwt_api_duty_signboxs_put,
  jwt_api_duty_signboxs_search_list_get,
  jwt_api_duty_signboxs_search_page_get,
  jwt_api_duty_signboxs_id_get,
  jwt_api_duty_signboxs_id_delete,
  jwt_api_duty_patrolSections_id_delete,
  jwt_api_duty_patrolSections_id_signboxs_post,
  jwt_api_duty_points_post,
  jwt_api_duty_points_put,
  jwt_api_duty_points_search_page_get,
  jwt_api_duty_points_to_es_put,
  jwt_api_duty_points_id_get,
  jwt_api_duty_patrol_statistics_page_get,
  jwt_api_duty_patrol_id_get,
  jwt_api_duty_patrolSections_post,
  jwt_api_duty_patrolSections_put,
  jwt_api_duty_patrolSections_search_byUserId_get,
  jwt_api_duty_patrolSections_search_page_get,
  jwt_api_duty_patrolSections_id_get,
  jwt_api_duty_flightRules_search_page_get,
  jwt_api_duty_flightRules_id_get,
  jwt_api_duty_flightRules_id_delete,
  jwt_api_duty_patrol_post,
  jwt_api_duty_patrol_put,
  jwt_api_duty_patrol_search_byUserId_get,
  jwt_api_duty_patrol_search_page_get,
  jwt_api_duty_dutyFlight_search_page_get,
  jwt_api_duty_dutyFlight_id_get,
  jwt_api_duty_dutyFlight_id_delete,
  jwt_api_duty_files_post,
  jwt_api_duty_flightRules_post,
  jwt_api_duty_flightRules_put,
  jwt_api_duty_flightRules_search_list_get,
  jwt_api_duty_dutyFlight_post,
  jwt_api_duty_dutyFlight_put,
  jwt_api_duty_dictionaryTrees_get
};
