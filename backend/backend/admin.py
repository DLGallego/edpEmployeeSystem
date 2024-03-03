from django.contrib import admin
from backend.models import Department, Employee, JobDesignation, EmployeeDesignation

class EmployeeAdmin(admin.ModelAdmin):
    pass

class DepartmentAdmin(admin.ModelAdmin):
    pass

class JdAdmin(admin.ModelAdmin):
    pass

class EdAdmin(admin.ModelAdmin):
    pass

admin.site.register(Employee, EmployeeAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(JobDesignation, JdAdmin)
admin.site.register(EmployeeDesignation, EdAdmin)