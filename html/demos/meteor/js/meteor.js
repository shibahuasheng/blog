(function() {
	var c = document.getElementsByTagName('canvas')[0],
		a = c.getContext('2d');
	M=Math;R=M.random;S=M.sin;C=M.cos;P=M.PI,D=M.abs;V='rgba(';Z=',';X=255;Y=')';l=0;W=c.width=c.height=500;n=15;A=[];B=[];function H(h){A[h]=[R()*W,R()/10*W,(R()*20+80)/100,(R()+1)/2*6,S(R()*P/8)]}setInterval(function G(E,F){if(E) return(F[0]-E[0]);with(a){clearRect(0,0,W,W),fillstyle='#000',fillRect(0,0,W,W);for(k=0;k<n;k++){A[k]!=null&&A[k][0]<W&&A[k][1]<W?1:H(k);for(o=A[k][4],i=A[k][0]+=A[k][3]*o,j=A[k][1]+=A[k][3],m=A[k][2],p=0;p<100;p++)beginPath(strokeStyle=V+X+Z+X+Z+X+Z+(1-p/100)+Y,moveTo(i-m*p*o,j-m*p),lineTo(i-m*(p-1)*o,j-m*p-m),stroke())}A.sort(G);for(i=0;i<n-1;i++)D(A[i][0]-A[i+1][0])<3?D(A[i][1]-A[i+1][1])<3?(B[l++]=[50,A[i][0],A[i][1]],H(i),H(i+1)):1:1;B[0]!=null?B.sort(G):1;for(g=0;g<l&&B[g][0]>0;g++){for(i=0,m=180;i<2*m;i+=1)beginPath(u=B[g][0],t=X*R()<<0,strokeStyle=V+X+Z+t+Z+t+Z+u/50+Y,h=i/m*P,j=1-D(i-m)/m,moveTo(B[g][1],B[g][2]+30*(1-u/50)),lineTo(B[g][1]-(2*S(h)-S(2*h))*j*(50-u),B[g][2]-(2*C(h)-C(2*h))*j*(50-u)),stroke());B[g][0]--}}},1)
})();
