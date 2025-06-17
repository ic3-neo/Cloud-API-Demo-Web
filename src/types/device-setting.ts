// 夜航灯开关
export enum NightLightsStateEnum {
  CLOSE = 0, // 0-关闭
  OPEN = 1, // 1-打开
}

// 限远开关
export enum DistanceLimitStatusEnum {
  UNSET = 0, // 0-未设置
  SET = 1, // 1-已设置
}

export interface DistanceLimitStatus {
  state?: DistanceLimitStatusEnum;
  distance_limit?: number; // 限远
}

// 避障
export enum ObstacleAvoidanceStatusEnum {
  CLOSE = 0, // 0-关闭
  OPEN = 1, // 1-开启
}

export interface ObstacleAvoidance {
  horizon?: ObstacleAvoidanceStatusEnum;// 水平避障开关
  upside?: ObstacleAvoidanceStatusEnum;// 上行方向避障开关
  downside?: ObstacleAvoidanceStatusEnum;// 下行方向避障开关
}

// 设备管理设置key
export enum DeviceSettingKeyEnum {
  NIGHT_LIGHTS_MODE_SET = 'night_lights_state', // 夜航灯开关
  HEIGHT_LIMIT_SET = 'height_limit', // 限高设置
  DISTANCE_LIMIT_SET = 'distance_limit_status', // 限远开关
  OBSTACLE_AVOIDANCE_HORIZON = 'obstacle_avoidance_horizon', // 水平避障状态
  OBSTACLE_AVOIDANCE_UPSIDE = 'obstacle_avoidance_upside', // 上视避障状态
  OBSTACLE_AVOIDANCE_DOWNSIDE = 'obstacle_avoidance_downside', // 下视避障状态
}

export type DeviceSettingType = Record<DeviceSettingKeyEnum, any>

export const initDeviceSetting = {
  [DeviceSettingKeyEnum.NIGHT_LIGHTS_MODE_SET]:
  {
    label: 'Drone Night Lights',
    value: '',
    trueValue: NightLightsStateEnum.CLOSE,
    editable: false,
    popConfirm: {
      visible: false,
      loading: false,
      // content: '为保证飞行器的作业安全，建议打开夜航灯',
      label: 'Drone Night Lights',
    },
    settingKey: DeviceSettingKeyEnum.NIGHT_LIGHTS_MODE_SET,
  },
  [DeviceSettingKeyEnum.HEIGHT_LIMIT_SET]:
  {
    label: 'Height Limit',
    value: '',
    trueValue: 120,
    editable: false,
    popConfirm: {
      visible: false,
      loading: false,
      // content: 'Height Limit：20 - 1500m',
      // info: 'Modification of the limit will affect all the current airport tasks, it is recommended to confirm the operation situation and then modify it',
      label: 'Height Limit',
    },
    settingKey: DeviceSettingKeyEnum.HEIGHT_LIMIT_SET,
  },
  [DeviceSettingKeyEnum.DISTANCE_LIMIT_SET]:
  {
    label: 'Distance Limit',
    value: '',
    trueValue: DistanceLimitStatusEnum.UNSET,
    // info: 'Restricted distance (15 - 8000m) is the maximum operating distance of a constraint vehicle relative to an airport',
    editable: false,
    popConfirm: {
      visible: false,
      loading: false,
      // content: 'Range (15-8000m) is the maximum operating distance of a constrained aircraft relative to an airport',
      // info: 'The modification limit will affect all the operational tasks of the current airport, and it is recommended to modify the operation after confirming the operation situation.',
      label: 'Distance Limit',

    },
    settingKey: DeviceSettingKeyEnum.DISTANCE_LIMIT_SET,
  },
  [DeviceSettingKeyEnum.OBSTACLE_AVOIDANCE_HORIZON]:
  {
    label: 'Horizontal Limit',
    value: '',
    trueValue: ObstacleAvoidanceStatusEnum.CLOSE,
    // info: 'The machine's obstacle avoidance status display allows for the rapid opening/off of the aircraft obstacle avoidance, and if further set up, please set it up on the equipment operation and maintenance page.',
    editable: false,
    popConfirm: {
      visible: false,
      loading: false,
      // content: 'Aircraft obstacle avoidance is the basic function to ensure the safety of flight operations, it is recommended to keep the aircraft obstacle avoidance open',
      label: 'Horizontal Limits',

    },
    settingKey: DeviceSettingKeyEnum.OBSTACLE_AVOIDANCE_HORIZON,
  },
  [DeviceSettingKeyEnum.OBSTACLE_AVOIDANCE_UPSIDE]:
  {
    label: 'Up Limit',
    value: '',
    trueValue: ObstacleAvoidanceStatusEnum.CLOSE,
    // info: 'The machine's obstacle avoidance status display allows for the rapid opening/off of the aircraft obstacle avoidance, and if further set up, please set it up on the equipment operation and maintenance page.',
    editable: false,
    popConfirm: {
      visible: false,
      loading: false,
      // content: 'Aircraft obstacle avoidance is the basic function to ensure the safety of flight operations, it is recommended to keep the aircraft obstacle avoidance open',
      label: 'Up Limit',

    },
    settingKey: DeviceSettingKeyEnum.OBSTACLE_AVOIDANCE_UPSIDE,
  },
  [DeviceSettingKeyEnum.OBSTACLE_AVOIDANCE_DOWNSIDE]:
  {
    label: 'Down Limit',
    value: '',
    trueValue: ObstacleAvoidanceStatusEnum.CLOSE,
    // info: 'The machine's obstacle avoidance status display allows for the rapid opening/off of the aircraft obstacle avoidance, and if further set up, please set it up on the equipment operation and maintenance page.',
    editable: false,
    popConfirm: {
      visible: false,
      loading: false,
      // content: 'Aircraft obstacle avoidance is the basic function to ensure the safety of flight operations, it is recommended to keep the aircraft obstacle avoidance open',
      label: 'Down Limit',

    },
    settingKey: DeviceSettingKeyEnum.OBSTACLE_AVOIDANCE_DOWNSIDE,
  },
} as DeviceSettingType

export const initDeviceSettingFormModel = {
  nightLightsState: false, // Nightlight switch
  heightLimit: 20, // Limiting height setting
  distanceLimitStatus: { state: false, distanceLimit: 15 }, // Remote switch
  obstacleAvoidanceHorizon: false, // Aircraft obstacle avoidance - horizontal switch settings
  obstacleAvoidanceUpside: false, // Aircraft obstacle avoidance - upper view switch settings
  obstacleAvoidanceDownside: false, // Aircraft obstacle avoidance - down-view switch settings
}

export type DeviceSettingFormModel = typeof initDeviceSettingFormModel
