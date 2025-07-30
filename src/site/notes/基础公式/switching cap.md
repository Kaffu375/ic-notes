---
{"dg-publish":true,"update":"2025-07-27","permalink":"/基础公式/switching cap/","dgPassFrontmatter":true}
---

---
开关电容
--

1.采样速度由两个因素决定，需要加大宽长比获得低导通电阻，减小采样电容

#### 互补开关

解决传输速度问题，导通电阻的不平衡性
![Pasted image 20250727235353.png](/img/user/attachments/Pasted%20image%2020250727235353.png)

![Pasted image 20250727235410.png](/img/user/attachments/Pasted%20image%2020250727235410.png)


#### 13.2.3精度问题

（1）电荷注入

![Pasted image 20250727235444.png](/img/user/attachments/Pasted%20image%2020250727235444.png)


$$
Q_{\mathrm{ch}}=W L C_{\mathrm{ox}}\left(V_{\mathrm{DD}}-V_{\mathrm{in}}-V_{\mathrm{TH}}\right)
$$
$$
\Delta V=\frac{W L C_{\mathrm{ox}}\left(V_{\mathrm{DD}}-V_{\mathrm{in}}-V_{\mathrm{TH}}\right)}{2 C_{\mathrm{H}}}
$$


除以2是因为理想情况只有一半注入到了电容

（2）时钟馈通
![Pasted image 20250727235506.png](/img/user/attachments/Pasted%20image%2020250727235506.png)

$$
\Delta V=V_{\mathrm{CK}} \frac{W C_{\mathrm{ov}}}{W C_{\mathrm{ov}}+C_{\mathrm{H}}}
$$


（3）KT/C噪声
![Pasted image 20250727235655.png](/img/user/attachments/Pasted%20image%2020250727235655.png)


导通电阻产生的噪声

13.2.4电荷注入抵消
![Pasted image 20250727235711.png](/img/user/attachments/Pasted%20image%2020250727235711.png)


由于流向沟道两边的电荷不一定是均分，所以过于理想

但是解决了时钟馈通问题

![Pasted image 20250727235721.png](/img/user/attachments/Pasted%20image%2020250727235721.png)

![Pasted image 20250727235732.png](/img/user/attachments/Pasted%20image%2020250727235732.png)

$$
W_{1} L_{1} C_{\mathrm{ox}}\left(V_{\mathrm{CK}}-V_{\mathrm{in}}-V_{\mathrm{THN}}\right)=W_{2} L_{2} C_{\mathrm{ox}}\left(V_{\mathrm{in}}-\left|V_{\mathrm{THP}}\right|\right)_{\mathrm{o}}
$$


#### 开关电容放大器

考虑S1 S2的电荷注入问题
![Pasted image 20250727235807.png](/img/user/attachments/Pasted%20image%2020250727235807.png)
![Pasted image 20250727235820.png](/img/user/attachments/Pasted%20image%2020250727235820.png)
![Pasted image 20250727235825.png](/img/user/attachments/Pasted%20image%2020250727235825.png)


对图13.31(a)电路的研究认为，只要采用合适的时序，开关S1和S3的电荷注人无关紧要，只有S2的沟道电荷会产生固定偏移电压。图13.34所示是一个实现时钟沿的简单电路，它保证S1在S2断开后才断开。

S2先断开，则电荷注入到CH不会对后续产生影响，

S3的沟道电荷完全来自运放，不会产生误差

#### 电容等效电阻

![Pasted image 20250727235834.png](/img/user/attachments/Pasted%20image%2020250727235834.png)

#### 开关RC精度计算

![Pasted image 20250727235855.png](/img/user/attachments/Pasted%20image%2020250727235855.png)
t=RCln（1/精度）