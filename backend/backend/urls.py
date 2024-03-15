"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('viewEmp/', views.EmployeeTable.as_view()),
    path('updateEmp/<int:employee_num>', views.EmployeeUpdate.as_view()),
    path('deleteEmp/<int:employee_num>', views.EmployeeDelete.as_view()),
    path('viewDept/', views.DepartmentTable.as_view()),
    path('updateDept/<int:id>', views.DepartmentUpdate.as_view()),
    path('deleteDept/<int:id>', views.DepartmentDelete.as_view()),
    path('viewJob/', views.JobTable.as_view()),
    path('updateJob/<int:id>', views.JobUpdate.as_view()),
    path('deleteJob/<int:id>', views.JobDelete.as_view()),
    path('', views.EmployeeDesignationTable.as_view()),
    path('updateEd/<int:pk>', views.EmployeeDesignationUpdate.as_view()),
    path('deleteEd/<int:pk>', views.EmployeeDesignationDelete.as_view()),
]
