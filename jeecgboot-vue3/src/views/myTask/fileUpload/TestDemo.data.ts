import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户名',
    align:"center",
    sorter: true,
    dataIndex: 'name'
   },
   {
    title: '性别',
    align:"center",
    sorter: true,
    dataIndex: 'sex_dictText'
   },
   {
    title: '年龄',
    align:"center",
    dataIndex: 'age'
   },
   {
    title: '描述',
    align:"center",
    dataIndex: 'descc'
   },
   {
    title: '生日',
    align:"center",
    dataIndex: 'birthday',
    customRender:({text}) =>{
      text = !text ? "" : (text.length > 10 ? text.substr(0,10) : text);
      return text;
    },
   },
   {
    title: '头像',
    align:"center",
    dataIndex: 'topPic',
    customRender:render.renderImage,
   },
   {
    title: '附件',
    align:"center",
    dataIndex: 'fileKk',
   },
   {
    title: '城市',
    align:"center",
    dataIndex: 'chegnshi',
   },
   {
    title: '弹窗',
    align:"center",
    dataIndex: 'pop'
   },
   {
    title: 'checkbox',
    align:"center",
    dataIndex: 'ceck_dictText'
   },
   {
    title: '下拉多选',
    align:"center",
    dataIndex: 'xiamuti_dictText'
   },
   {
    title: '搜索下拉',
    align:"center",
    dataIndex: 'searchSel_dictText'
   },
   {
    title: '下拉字典表',
    align:"center",
    dataIndex: 'selTable_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "用户名",
      field: 'name',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "性别",
      field: 'sex',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"sex"
      },
      //colProps: {span: 6},
 	},
	{
      label: "生日",
      field: 'birthday',
      component: 'DatePicker',
      componentProps: {
        valueFormat: 'YYYY-MM-DD'
      },
      //colProps: {span: 6},
 	},
	{
      label: "用户编码",
      field: 'userCode',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "城市",
      field: 'chegnshi',
      component: 'JAreaLinkage',
      componentProps: {
        saveCode: 'region',
      },
      //colProps: {span: 6},
 	},
	{
      label: "checkbox",
      field: 'ceck',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"sex"
      },
      //colProps: {span: 6},
 	},
	{
      label: "下拉多选",
      field: 'xiamuti',
      component: 'JSelectMultiple',
      componentProps:{
        dictCode:"sex",
        triggerChange: true
     },
      //colProps: {span: 6},
 	},
	{
      label: "搜索下拉",
      field: 'searchSel',
      component: 'JSearchSelect',
      componentProps:{
         dict:"sys_role,role_name,role_code"
      },
      //colProps: {span: 6},
 	},
	{
      label: "下拉字典表",
      field: 'selTable',
      component: 'JSearchSelect',
      componentProps:{
         dict:"sys_user where username like 'a%',realname,username"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '主键',
    field: 'id',
    component: 'Input',
  },
  {
    label: '用户名',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户名!'},
          ];
     },
  },
  {
    label: '性别',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sex"
     },
  },
  {
    label: '年龄',
    field: 'age',
    component: 'InputNumber',
  },
  {
    label: '描述',
    field: 'descc',
    component: 'InputTextArea',
  },
  {
    label: '生日',
    field: 'birthday',
    component: 'DatePicker',
    componentProps: {
      valueFormat: 'YYYY-MM-DD'
    },
  },
  {
    label: '用户编码',
    field: 'userCode',
    component: 'Input',
  },
  {
    label: '头像',
    field: 'topPic',
     component: 'JImageUpload',
     componentProps:{
        fileMax: 0
      },
  },
  {
    label: '附件',
    field: 'fileKk',
    component: 'JUpload',
    componentProps:{
     },
  },
  {
    label: '城市',
    field: 'chegnshi',
    component: 'JAreaLinkage',
    componentProps: {
      saveCode: 'region',
    },
  },
  {
    label: '弹窗',
    field: 'pop',
    component: 'Input',
  },
  {
    label: 'checkbox',
    field: 'ceck',
    component: 'JCheckbox',
    componentProps:{
        dictCode:"sex"
     },
  },
  {
    label: '下拉多选',
    field: 'xiamuti',
    component: 'JSelectMultiple',
    componentProps:{
        dictCode:"sex"
     },
  },
  {
    label: '搜索下拉',
    field: 'searchSel',
    component: 'JSearchSelect',
    componentProps:{
       dict:"sys_role,role_name,role_code"
    },
  },
  {
    label: '下拉字典表',
    field: 'selTable',
    component: 'JSearchSelect',
    componentProps:{
       dict:"sys_user where username like 'a%',realname,username"
    },
  },
];

// 高级查询数据
export const superQuerySchema = {
  name: {title: '用户名',order: 1,view: 'text', type: 'string',},
  sex: {title: '性别',order: 2,view: 'list', type: 'string',dictCode: 'sex',},
  age: {title: '年龄',order: 3,view: 'number', type: 'number',},
  descc: {title: '描述',order: 4,view: 'textarea', type: 'string',},
  birthday: {title: '生日',order: 5,view: 'date', type: 'string',},
  topPic: {title: '头像',order: 7,view: 'image', type: 'string',},
  fileKk: {title: '附件',order: 8,view: 'file', type: 'string',},
  chegnshi: {title: '城市',order: 9,view: 'pca', type: 'string',},
  pop: {title: '弹窗',order: 10,view: 'text', type: 'string',},
  ceck: {title: 'checkbox',order: 11,view: 'checkbox', type: 'string',dictCode: 'sex',},
  xiamuti: {title: '下拉多选',order: 12,view: 'list_multi', type: 'string',dictCode: 'sex',},
  searchSel: {title: '搜索下拉',order: 13,view: 'sel_search', type: 'string',dictTable: "sys_role", dictCode: 'role_code', dictText: 'role_name',},
  selTable: {title: '下拉字典表',order: 14,view: 'sel_search', type: 'string',dictTable: "sys_user where username like 'a%'", dictCode: 'username', dictText: 'realname',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}