<style lang="less">
@import './login.less';
</style>

<template>
<div class="login">
    <div class="login-con">
        <Card icon="log-in" title="欢迎登录" :bordered="false">
            <div class="form-con">
                <login-form @on-success-valid="handleSubmit"></login-form>
                <p class="login-tip">输入任意用户名和密码即可</p>
            </div>
        </Card>
    </div>
    <!-- <div class="login-card-wrap">
        <h1 style="color: #fff; text-align: center;">系统登录</h1>
        <Card :bordered="false">
            <Form>
                <FormItem>
                  <Input size="large" icon="ios-person" placeholder="Enter something..." />
                </FormItem>
                <FormItem>
                  <Input size="large" type="password" icon="md-lock" placeholder="请输入密码" />
                </FormItem>
                <FormItem>
                  <Button type="primary" size="large" long>登录</Button>
                </FormItem>
            </Form>
        </Card>
    </div> -->
</div>
</template>

<script>
import LoginForm from '_c/login-form';
import { mapActions } from 'vuex';
export default {
    components: {
        LoginForm
    },
    methods: {
        ...mapActions([
            'handleLogin',
            'getUserInfo'
        ]),
        showSpin () {
            this.$Spin.show({
                render: (h) => {
                    return h('div', [
                        h('Icon', {
                            'class': 'demo-spin-icon-load',
                            props: {
                                type: 'ios-loading',
                                size: 18
                            }
                        }),
                        h('div', '登录中，请稍候...')
                    ]);
                }
            });
        },
        hideSpin () {
            this.$Spin.hide();
        },
        handleSubmit ({ userName, password }) {
            this.showSpin();
            this.handleLogin({
                userName,
                password
            }).then(res => {
                this.getUserInfo().then(res => {
                    this.$router.push({
                        name: this.$config.homeName
                    });
                    this.hideSpin();
                });
            });
        }
    }
};
</script>
