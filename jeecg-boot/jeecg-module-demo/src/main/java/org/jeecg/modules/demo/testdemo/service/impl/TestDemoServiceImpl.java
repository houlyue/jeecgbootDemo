package org.jeecg.modules.demo.testdemo.service.impl;

import org.jeecg.modules.demo.testdemo.entity.TestDemo;
import org.jeecg.modules.demo.testdemo.mapper.TestDemoMapper;
import org.jeecg.modules.demo.testdemo.service.ITestDemoService;
import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

/**
 * @Description: 测试用户表
 * @Author: jeecg-boot
 * @Date:   2024-12-11
 * @Version: V1.0
 */
@Service
public class TestDemoServiceImpl extends ServiceImpl<TestDemoMapper, TestDemo> implements ITestDemoService {

}
